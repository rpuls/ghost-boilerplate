<p align="center">
  <a href="https://ghost.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/hczpmiapo/image/upload/v1731276441/Static%20assets/Logos/ghost_vgwnyq.png">
      <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/hczpmiapo/image/upload/v1731276441/Static%20assets/Logos/ghost_vgwnyq.png">
      <img alt="Ghost logo" src="https://res.cloudinary.com/hczpmiapo/image/upload/v1731276441/Static%20assets/Logos/ghost_vgwnyq.png" width="100">
    </picture>
  </a>
  <a href="https://railway.app/deploy/ZQcedl?referralCode=-Yg50p">
    <picture>
      <source media="(prefers-color-scheme: light)" srcset="https://railway.app/brand/logo-light.svg">
      <source media="(prefers-color-scheme: dark)" srcset="https://railway.app/brand/logo-dark.svg">
      <img alt="Railway logo" src="https://railway.app/brand/logo-light.svg" width="100">
    </picture>
  </a>
</p>

<h2 align="center">
  Ghost Blog Starter<br>
  <a href="https://railway.app/deploy/ZQcedl?referralCode=-Yg50p">One-click deploy on Railway!</a>
</h2>

<p align="center">
  A professional publishing platform built on Node.js, featuring MySQL database support, Cloudinary image storage, and Railway-friendly source deployment
</p>

## About this boilerplate

This boilerplate is a pre-configured Ghost blog setup optimized for deployment on [Railway](https://railway.app?referralCode=-Yg50p). It is based on the published standalone Ghost source package, includes the full backend and admin dashboard, and keeps the simple Railway deployment flow from the earlier template while updating the codebase to Ghost 6.

Updated to `version 6.28.0`

## Preconfigured Features & Integrations

- **Ghost 6 Source Build**: Runs directly from source at the repo root, so Railway users can update by switching branches without changing root directory settings
- **MySQL Database**: Ready for Railway MySQL or local MySQL
- **Cloudinary Integration**: Cloud-based image storage with local fallback when `CLOUDINARY_URL` is not set
- **Admin Dashboard**: Full Ghost admin interface included
- **Railway-Friendly Bootstrap**: `npm start` regenerates `config.production.json` automatically before boot

### Railway Setup

1. Use the one-click deploy link:

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/deploy/ZQcedl?referralCode=-Yg50p)

2. Railway should provide or let you configure:

```env
DB_HOST="${{MySQL.MYSQLHOST}}"
DB_NAME="${{MySQL.MYSQLDATABASE}}"
DB_USER="${{MySQL.MYSQLUSER}}"
DB_PASSWORD="${{MySQL.MYSQLPASSWORD}}"
PUBLIC_URL="https://${{RAILWAY_PUBLIC_DOMAIN}}"
NODE_ENV="production"
```

3. Optional integrations:

```env
# Cloudinary Configuration
CLOUDINARY_URL="" # Example: cloudinary://<api_key>:<api_secret>@<cloud_name>
CLOUDINARY_FOLDER="ghost-blog-images"

# Mail Configuration
MAIL_FROM="" # Optional. Falls back to MAILGUN_SMTP_LOGIN or noreply@MAILGUN_DOMAIN
MAILGUN_API_KEY=""
MAILGUN_DOMAIN=""

# SMTP fallback
MAILGUN_SMTP_LOGIN=""
MAILGUN_SMTP_PASSWORD=""
MAILGUN_SMTP_HOST=""
MAILGUN_SMTP_PORT=""
```

4. Recommended Railway start command:

```bash
npm start
```

If an older deployment is still using:

```bash
npm run postinstall && npm run start
```

that should still work too. New projects should use `npm start`.

### Local Development

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env`

3. Configure your local database and optional Cloudinary settings

4. Initialize the database once:

```bash
NODE_ENV=production npx knex-migrator-init
```

Windows PowerShell:

```powershell
$env:NODE_ENV='production'
npx.cmd knex-migrator-init
```

5. Start Ghost:

```bash
npm start
```

For development mode:

```bash
npm run dev
```

### Notes for Existing Template Users

This branch is designed so existing Railway projects based on the older template can update without needing to reconfigure Railway root directories. The intended upgrade flow is:

- switch the Railway project to this branch
- keep the same env var contract
- point the app at an upgraded or migrated MySQL database
- redeploy

If your live project is already using the older start command, it should continue to boot after upgrading. For new projects, use `npm start`.

### Current Validation Status

This Ghost 6 setup has been validated on Ghost 6 with MySQL and Railway:

- production boot succeeded
- `/` returned `200 OK`
- `/ghost/` returned `200 OK`
- `/ghost/api/admin/site/` returned `200 OK`
- Cloudinary image upload works
- email delivery works

### Commands

- `npm install` - Install dependencies
- `npm run postinstall` - Generate runtime config and verify bootstrap files
- `npm start` - Regenerate config and start Ghost in production mode
- `npm run dev` - Start Ghost in development mode

<p align="center">
  <a href="https://funkyton.com/">
    A template by,
    <br><br>
    <picture>
      <img alt="FUNKYTON logo" src="https://res-5.cloudinary.com/hczpmiapo/image/upload/q_auto/v1/ghost-blog-images/funkyton-logo.png" width="200">
    </picture>
  </a>
</p>
