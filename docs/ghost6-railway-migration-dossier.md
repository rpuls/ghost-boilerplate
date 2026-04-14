# Ghost 6 Railway Migration Dossier

## Purpose

This document captures the important findings, decisions, risks, and execution plan for recreating this Railway-friendly Ghost setup on the latest Ghost 6 line without losing context as the conversation compresses.

It is written to serve as:

- A durable memory of what the current Ghost 5 Railway build is doing
- A reference for what must and must not be ported
- A working migration plan for a clean Ghost 6 parallel repo
- A checklist for local verification and Railway deployment

## End Goal

Create a new clean Ghost 6 repository that:

- Runs from unpacked source code on Railway
- Preserves the current Railway deployment ergonomics
- Preserves Cloudinary-backed image storage
- Avoids patching Ghost core unless absolutely necessary
- Can be developed and tested locally
- Can be staged safely in parallel to the existing Ghost 5 repo

The goal is not to upgrade this existing repo in place.

## Current Project Summary

The current repository is a self-hostable Ghost 5.112.0 codebase modified to work well on Railway. The important pieces are narrower than the repo size suggests.

### Core local facts

- Ghost version: `5.112.0`
- Repo shape: standalone Ghost app, not a tiny wrapper around `ghost-cli`
- Entrypoint: [index.js](/c:/Users/rasmu/Documents/GitHub/ghost-boilerplate/versions/railway-version/index.js)
- Boot shim: [ghost.js](/c:/Users/rasmu/Documents/GitHub/ghost-boilerplate/versions/railway-version/ghost.js)
- Railway config: [railway.json](/c:/Users/rasmu/Documents/GitHub/ghost-boilerplate/versions/railway-version/railway.json)
- Runtime config generator: [script/create-config.js](/c:/Users/rasmu/Documents/GitHub/ghost-boilerplate/versions/railway-version/script/create-config.js)
- Postinstall wrapper: [script/postinstall.js](/c:/Users/rasmu/Documents/GitHub/ghost-boilerplate/versions/railway-version/script/postinstall.js)
- Cloudinary adapter: [content/adapters/storage/cloudinary/index.js](/c:/Users/rasmu/Documents/GitHub/ghost-boilerplate/versions/railway-version/content/adapters/storage/cloudinary/index.js)

### What this setup is really doing

The current Railway compatibility comes mostly from:

1. Running Ghost from source in a standalone app layout
2. Generating `config.production.json` from Railway env vars at runtime
3. Registering a custom storage adapter in `content/adapters/storage/cloudinary`
4. Keeping deployment simple with a start flow like:
   `npm run postinstall && npm run start`

This is important because it means the port to Ghost 6 should focus on reproducing those capabilities, not copying the entire Ghost 5 repo blindly.

## Existing Railway Behavior

The current Railway deployment model uses env vars like:

```env
DB_HOST="${{MySQL.MYSQLHOST}}"
DB_NAME="${{MySQL.MYSQLDATABASE}}"
DB_USER="${{MySQL.MYSQLUSER}}"
DB_PASSWORD="${{MySQL.MYSQLPASSWORD}}"
NODE_ENV="production"
PUBLIC_URL="https://${{RAILWAY_PUBLIC_DOMAIN}}"
CLOUDINARY_URL=""
MAILGUN_SMTP_LOGIN=""
MAILGUN_SMTP_PASSWORD=""
```

Current start command:

```bash
npm run postinstall && npm run start
```

Current `railway.json` only declares Railpack:

```json
{
  "$schema": "https://railway.com/railway.schema.json",
  "build": {
    "builder": "RAILPACK"
  }
}
```

This simplicity is worth preserving.

## Important Findings From The Current Ghost 5 Repo

### 1. The Cloudinary adapter is a standard Ghost storage adapter

The adapter is not wired through deep custom patches. It extends `ghost-storage-base` and implements the expected methods:

- `exists`
- `save`
- `serve`
- `delete`
- `read`

This is a good sign for Ghost 6 portability.

Relevant files:

- [content/adapters/storage/cloudinary/index.js](/c:/Users/rasmu/Documents/GitHub/ghost-boilerplate/versions/railway-version/content/adapters/storage/cloudinary/index.js)
- [content/adapters/storage/cloudinary/errors.js](/c:/Users/rasmu/Documents/GitHub/ghost-boilerplate/versions/railway-version/content/adapters/storage/cloudinary/errors.js)
- [content/adapters/storage/cloudinary/plugins/retinajs.js](/c:/Users/rasmu/Documents/GitHub/ghost-boilerplate/versions/railway-version/content/adapters/storage/cloudinary/plugins/retinajs.js)

### 2. The current adapter depends on config naming consistency

`create-config.js` sets:

```json
"storage": {
  "active": "cloudinary",
  "cloudinary": { ... }
}
```

This matches the folder name `content/adapters/storage/cloudinary`.

There is an older `config.production.json` in the repo that uses `"active": "my-cloudinary-adapter"`, but that appears to be stale and not the current runtime output. The generated config path is the one that matters.

### 3. `script/postinstall.js` is mostly diagnostic, not essential logic

The script:

- logs directories
- confirms the adapter folder exists
- calls `node script/create-config.js`

This means Ghost 6 may not need a verbose postinstall at all. A much simpler bootstrap step is likely enough.

### 4. The current `.env.example` has a likely typo

It says:

```env
DB_USER=postgres
DB_PASSWORD=postgres
```

but the actual app config is MySQL, not Postgres.

This should be corrected in the Ghost 6 repo.

### 5. Mailgun may no longer be a first-class migration priority

The user noted mail may now be configured in the admin UI. The current `create-config.js` still supports:

- Mailgun API transport
- SMTP transport
- Direct transport fallback

Cloudinary is the critical requirement. Mail can initially remain optional and conservative.

## Primary-Source Findings From Current Ghost Upstream

The migration plan was cross-checked against Ghost docs and source code, not memory.

### Official docs checked

- Install from source:
  https://docs.ghost.org/install/source

### GitHub source checked

- Monorepo root package:
  https://github.com/TryGhost/Ghost/blob/main/package.json
- Standalone Ghost package:
  https://github.com/TryGhost/Ghost/blob/main/ghost/core/package.json
- Config loader:
  https://github.com/TryGhost/Ghost/blob/main/ghost/core/core/shared/config/loader.js
- Default config:
  https://github.com/TryGhost/Ghost/blob/main/ghost/core/core/shared/config/defaults.json
- Config overrides:
  https://github.com/TryGhost/Ghost/blob/main/ghost/core/core/shared/config/overrides.json
- Adapter manager:
  https://github.com/TryGhost/Ghost/blob/main/ghost/core/core/server/services/adapter-manager/index.js
- Adapter config mapper:
  https://github.com/TryGhost/Ghost/blob/main/ghost/core/core/server/services/adapter-manager/config.js
- Adapter option resolver:
  https://github.com/TryGhost/Ghost/blob/main/ghost/core/core/server/services/adapter-manager/options-resolver.js
- Storage adapter entrypoint:
  https://github.com/TryGhost/Ghost/blob/main/ghost/core/core/server/adapters/storage/index.js
- Adapter support README:
  https://github.com/TryGhost/Ghost/blob/main/ghost/core/content/adapters/README.md
- Ghost storage tests:
  https://github.com/TryGhost/Ghost/blob/main/ghost/core/test/unit/server/adapters/storage/index.test.js
- Dev object storage example:
  https://github.com/TryGhost/Ghost/blob/main/compose.dev.storage.yaml

## Critical Ghost 6 Discoveries

### 1. Ghost 6 upstream is now a pnpm monorepo

The current Ghost repo root is now a `pnpm` monorepo. It is not the old standalone layout.

Important implications:

- The docs page for source install still talks about Yarn and older workflow
- The real current source of truth is the repo itself
- We should not assume the docs fully reflect the current packaging reality

### 2. There is still a standalone Ghost package inside the monorepo

The file at `ghost/core/package.json` is the key. It represents the standalone Ghost app packaging shape and currently reports:

- Package name: `ghost`
- Version observed in upstream main at research time: `6.30.0-rc.0`
- Node engine: `^22.13.1`

This standalone package is the correct basis for a Railway-friendly repo.

### 3. Ghost still supports custom adapters in `content/adapters`

This is one of the most important findings.

Ghost upstream still documents and tests support for custom adapters placed in:

- `content/adapters/storage`
- `content/adapters/scheduling`

This means the Cloudinary adapter pattern is still valid in Ghost 6.

### 4. Ghost 6 config loading still supports `config.production.json`

`loader.js` still loads config in this order:

- overrides
- argv
- env
- `config.<env>.json`
- `config.local.json`
- default env config
- defaults

That means a generated `config.production.json` is still a legitimate approach.

### 5. Ghost 6 also supports env-based nested config via double underscores

The config loader uses `nconf.env({separator: '__', parseValues: true})`.

That means config keys can be expressed through env vars like:

```env
storage__active=cloudinary
storage__cloudinary__useDatedFolder=false
```

This is important because it gives two viable config strategies:

1. Continue generating `config.production.json`
2. Switch to pure env override config

For initial migration, generating `config.production.json` is safer because it matches the existing Railway product design.

### 6. Ghost 6 storage is richer than Ghost 5

Ghost 6 defaults now include:

```json
"storage": {
  "active": "LocalImagesStorage",
  "media": "LocalMediaStorage",
  "files": "LocalFilesStorage"
}
```

Ghost also now supports resource-specific storage resolution like:

- `storage` for images
- `storage:media`
- `storage:files`

This matters because the old Ghost 5 assumption of one storage adapter governing everything is no longer the whole story.

### 7. Upstream Ghost 6 has built-in S3 support for media/files

Ghost’s development storage compose file configures:

- `storage__media__adapter=S3Storage`
- `storage__files__adapter=S3Storage`

while keeping images on the default adapter path.

This confirms the storage system is more modular now and should be treated carefully.

## What We Should Port

### Must port

- The Cloudinary image storage adapter
- Railway-friendly config generation
- A clean README and env example
- A deployment flow that works from source code on Railway

### Probably port

- Optional mail transport support in bootstrap config
- `railway.json`

### Should not port blindly

- Ghost 5 `components/*.tgz` dependency model
- Ghost 5 monobundle assumptions
- Any stale config files generated in old experiments
- Old docs assumptions about Yarn-based source install

## Recommended Architecture For The New Ghost 6 Repo

### Repo strategy

Create a brand-new parallel directory inside this workspace, separate from the Ghost 5 repo contents. Do not attempt an in-place upgrade.

Suggested directory name:

- `ghost6-railway`

or similar.

### Base code strategy

Base the new repo on the standalone package layout from upstream `ghost/core`, not on the monorepo root and not on this Ghost 5 repo.

### Config strategy

Phase 1:

- Keep `script/create-config.js`
- Generate `config.production.json`
- Preserve the current simple Railway UX

Phase 2, optional later:

- Evaluate replacing generated config with env-only nested overrides

### Storage strategy

Initial target:

- Use Cloudinary for image storage only
- Leave `media` and `files` on Ghost 6 defaults unless there is a product reason to move those too

Reason:

- This reduces migration scope
- It matches the current must-have requirement: Cloudinary images
- It avoids unintended regressions in newer Ghost 6 storage behavior

## Proposed Ghost 6 Config Shape

Initial Ghost 6 config should likely look conceptually like:

```json
{
  "url": "https://example.com",
  "server": {
    "host": "0.0.0.0",
    "port": 2368
  },
  "database": {
    "client": "mysql",
    "connection": {
      "host": "...",
      "user": "...",
      "password": "...",
      "database": "..."
    }
  },
  "storage": {
    "active": "cloudinary",
    "cloudinary": {
      "useDatedFolder": false,
      "upload": {
        "use_filename": true,
        "unique_filename": false,
        "overwrite": false,
        "folder": "ghost-blog-images",
        "tags": ["blog"]
      },
      "fetch": {
        "quality": "auto",
        "secure": true,
        "cdn_subdomain": true
      }
    }
  }
}
```

Open question:

- whether Ghost 6 expects the image adapter class name to remain the folder/module name with default export behavior, or whether any class naming tweaks are needed

Current evidence suggests the folder/module approach should still work.

## Known Risks

### 1. Ghost docs are partially stale

The source install docs still describe Yarn, but upstream code is now pnpm-based. Rely on source layout over docs where they disagree.

### 2. Main branch may be ahead of latest stable

Observed upstream `ghost/core/package.json` was `6.30.0-rc.0` at research time. We should choose an explicit stable 6.x target when building the new repo, not blindly follow `main`.

### 3. Node runtime changed significantly

Ghost 5 here uses Node 18.
Ghost 6 standalone now wants Node `^22.13.1`.

This may affect:

- Railway runtime
- native dependencies
- local Docker/dev workflow

### 4. Dependency graph changed a lot

Ghost 6 package deps are materially different. The old Ghost 5 dependency pinning and local component tarballs should not be carried forward.

### 5. Storage semantics changed

Ghost 6 distinguishes images, media, and files storage more clearly. Cloudinary should be integrated deliberately rather than assumed to cover every upload class automatically.

### 6. Mail transport may have changed in practice

Mail bootstrap support may still work, but it is secondary to the Cloudinary migration. We should avoid letting mail complexity block the core migration.

## Execution Plan

### Phase 1. Preserve context

- Create this dossier
- Keep it updated as work progresses

### Phase 2. Build a clean parallel Ghost 6 repo

- Create a new sibling directory in this workspace
- Populate it from the standalone Ghost 6 package shape
- Do not modify this Ghost 5 repo as the base

### Phase 3. Reapply Railway layer

- Add `railway.json`
- Add `.env.example`
- Add `script/create-config.js`
- Add optional `script/postinstall.js`
- Keep `start` command Railway-friendly

### Phase 4. Reapply Cloudinary adapter

- Port the adapter into `content/adapters/storage/cloudinary`
- Install any required dependencies such as `cloudinary`
- Adjust code only where Ghost 6 runtime differences require it

### Phase 5. Local validation

- Boot a local MySQL database, preferably via Docker
- Generate config
- Start Ghost 6
- Verify admin and frontend load
- Verify image upload with and without Cloudinary config if possible

### Phase 6. Railway readiness

- Confirm env var contract
- Confirm start command
- Confirm Node version expectations
- Update README with exact deployment instructions

## Immediate Next Steps

1. Create the parallel Ghost 6 working directory
2. Choose an explicit Ghost 6 target version
3. Pull in the standalone Ghost package contents for that version
4. Port the Cloudinary adapter
5. Port config bootstrap
6. Boot locally against MySQL

## Version Selection Guidance

Do not build from Ghost `main` directly for deployment.

Instead:

- choose the latest stable Ghost 6 package release
- use its standalone package contents as the baseline
- only use `main` as architectural reference

## Questions To Answer During Implementation

- What exact latest stable Ghost 6 version should we target?
- What is the cleanest way to obtain the standalone package contents locally?
- Does the Cloudinary adapter need any code changes for newer Ghost or dependency APIs?
- Is `postinstall` still the best bootstrap hook for Railway, or should config generation happen in `start`?
- Do we want a tiny bootstrap script that guarantees config generation before boot, instead of chaining shell commands?

## Current Recommendation

Proceed with a clean parallel Ghost 6 repo and keep the first version intentionally boring:

- MySQL only
- Cloudinary for images
- local default handling for files/media
- generated `config.production.json`
- minimal deviations from upstream standalone Ghost 6

This minimizes unknowns and gives the highest chance of getting a working Railway product quickly.

## Implementation Progress Log

This section records what has already been done in the parallel Ghost 6 workspace.

### Concrete version chosen

- Selected latest stable npm package version at implementation time: `ghost@6.28.0`
- Confirmation source used during implementation: `npm view ghost version`

### Parallel repo created

- New directory: [ghost-6-railway](/c:/Users/rasmu/Documents/GitHub/ghost-boilerplate/versions/railway-version/ghost-6-railway)
- Base source came from the published standalone Ghost package tarball, not from the monorepo root and not from the old Ghost 5 repo

### Files added or changed in the new repo

- Added Railway bootstrap config:
  [ghost-6-railway/script/create-config.js](/c:/Users/rasmu/Documents/GitHub/ghost-boilerplate/versions/railway-version/ghost-6-railway/script/create-config.js)
- Added postinstall bootstrap:
  [ghost-6-railway/script/postinstall.js](/c:/Users/rasmu/Documents/GitHub/ghost-boilerplate/versions/railway-version/ghost-6-railway/script/postinstall.js)
- Added env template:
  [ghost-6-railway/.env.example](/c:/Users/rasmu/Documents/GitHub/ghost-boilerplate/versions/railway-version/ghost-6-railway/.env.example)
- Added Railway config:
  [ghost-6-railway/railway.json](/c:/Users/rasmu/Documents/GitHub/ghost-boilerplate/versions/railway-version/ghost-6-railway/railway.json)
- Added repo ignore rules:
  [ghost-6-railway/.gitignore](/c:/Users/rasmu/Documents/GitHub/ghost-boilerplate/versions/railway-version/ghost-6-railway/.gitignore)
- Ported Cloudinary adapter:
  [ghost-6-railway/content/adapters/storage/cloudinary/index.js](/c:/Users/rasmu/Documents/GitHub/ghost-boilerplate/versions/railway-version/ghost-6-railway/content/adapters/storage/cloudinary/index.js)
- Updated `package.json` scripts and dependencies:
  [ghost-6-railway/package.json](/c:/Users/rasmu/Documents/GitHub/ghost-boilerplate/versions/railway-version/ghost-6-railway/package.json)

### Important implementation-specific discovery

The old adapter used:

- `const got = require('got')`

That is not safe in Ghost 6 because upstream standalone Ghost 6 currently ships `got@13`, which is ESM-only. The adapter was updated to use `node-fetch` for the `read()` method instead.

This is a real migration issue that would likely break image reads if left unchanged.

### Local validation completed

The new Ghost 6 repo has already been validated locally against a Docker MySQL 8 container.

Validation steps completed:

1. Installed dependencies in `ghost-6-railway`
2. Generated `config.production.json`
3. Started a temporary MySQL 8 Docker container on local port `3307`
4. Initialized the Ghost database with `knex-migrator-init`
5. Booted Ghost 6 in production mode
6. Confirmed successful HTTP responses from:
   - `/`
   - `/ghost/`
   - `/ghost/api/admin/site/`

Observed result:

- Ghost 6 booted successfully in production mode with MySQL
- frontend and admin endpoints returned `200 OK`

### Important local-environment caveat

When Ghost 6 was first started inside the sandbox, it failed with:

- `spawn EPERM`

This occurred during asset invalidation via `esbuild`. Re-running outside the sandbox succeeded, which strongly suggests the failure was caused by local sandbox restrictions rather than a repo bug.

Interpretation:

- This is not currently evidence of a Railway runtime problem
- It is a local execution-environment artifact

### Current known follow-ups

- Cloudinary upload behavior still needs an explicit end-to-end upload test
- README for the new repo should describe the new simpler start flow
- Decide whether to keep `npm start` as the Railway command or also expose an exact legacy-compatible command
