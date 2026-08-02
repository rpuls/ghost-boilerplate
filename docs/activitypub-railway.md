# Ghost ActivityPub on Railway

Ghost 6 includes the Social Web integration, but a self-hosted Ghost instance
needs a reverse proxy to connect selected federation routes to Ghost's hosted
ActivityPub service. This repository includes a small Caddy service for that
job in `caddy/`.

## Request routing

The public domain must point to Caddy. Caddy sends these routes to
`https://ap.ghost.org`:

- `/.ghost/activitypub/*`
- `/.well-known/webfinger`
- `/.well-known/nodeinfo`

All other requests go to the Ghost service over Railway's private network.
In particular, `/ghost/.well-known/jwks.json` must reach Ghost itself; routing
that endpoint to the hosted ActivityPub service prevents webhook setup.

## Railway services

### Ghost

Deploy the repository root as the Ghost service. Use these variables in
addition to the existing database, mail, and storage variables:

```env
NODE_ENV=production
PUBLIC_URL=https://example.com
HOST=::
PORT=2368
```

`PUBLIC_URL` must be the final canonical domain. Do not include a path, and do
not use the Ghost service's Railway-generated domain. The custom public domain
belongs on Caddy after the cutover.

The Ghost service does not need a public domain after Caddy is working. Keep
`PORT=2368` explicit because another Railway service references that port.

### Caddy

Create a second service from the same repository and set its root directory to
`/caddy`. Attach the public domain to this service and configure:

```env
PORT=8080
GHOST_TARGET=http://${{Ghost.RAILWAY_PRIVATE_DOMAIN}}:2368
ACTIVITYPUB_TARGET=https://ap.ghost.org
```

Replace `Ghost` in the Railway reference if the Ghost service has a different
name. `ACTIVITYPUB_TARGET` is explicit here for clarity; the Caddyfile uses the
same hosted endpoint as its default.

Railway terminates public TLS before forwarding requests to Caddy, so Caddy
listens on HTTP internally and passes `X-Forwarded-Proto: https` upstream.

## Activation and checks

1. Deploy Ghost and confirm it is healthy on its existing domain.
2. Deploy Caddy and test it using a temporary Railway-generated domain.
3. Move the custom domain from Ghost to Caddy.
4. Confirm the site and `/ghost/` still load normally.
5. Confirm `https://example.com/ghost/.well-known/jwks.json` returns a JSON Web
   Key Set from Ghost.
6. Confirm a WebFinger request is handled without a Ghost 404:

   ```text
   https://example.com/.well-known/webfinger?resource=acct:index@example.com
   ```

7. In Ghost Admin, open the Network/Social Web settings and enable the feature.

If Social Web was enabled before routing was ready, disable and re-enable it
after the checks pass. This makes Ghost retry hosted-service registration and
webhook creation.

Ghost's hosted ActivityPub service is free for self-hosters with usage limits.
The current limits and operational details are maintained in the official
[Ghost Docker installation documentation](https://docs.ghost.org/install/docker/).
The route list follows Ghost's official
[ActivityPub Caddy snippet](https://github.com/TryGhost/ghost-docker/blob/main/caddy/snippets/ActivityPub).
See Railway's documentation for
[Dockerfile detection](https://docs.railway.com/builds/dockerfiles) and
[private networking](https://docs.railway.com/networking/private-networking).
