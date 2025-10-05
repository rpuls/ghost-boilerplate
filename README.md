<p align="center">
  <a href="https://ghost.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/hczpmiapo/image/upload/v1731276441/Static%20assets/Logos/ghost_vgwnyq.png">
      <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/hczpmiapo/image/upload/v1731276441/Static%20assets/Logos/ghost_vgwnyq.png">
      <img alt="Ghost logo" src="https://res.cloudinary.com/hczpmiapo/image/upload/v1731276441/Static%20assets/Logos/ghost_vgwnyq.png" width=100>
    </picture>
  </a>
  <a href="https://railway.app/template/ZQcedl?referralCode=-Yg50p">
    <picture>
      <source media="(prefers-color-scheme: light)" srcset="https://railway.app/brand/logo-light.svg">
      <source media="(prefers-color-scheme: dark)" srcset="https://railway.app/brand/logo-dark.svg">
      <img alt="Railway logo" src="https://railway.app/brand/logo-light.svg" width=100>
    </picture>
  </a>
</p> 

<h2 align="center">
  Ghost Blog Starter<br>
  <a href="https://railway.app/template/ZQcedl?referralCode=-Yg50p">One-click deploy on Railway!</a>
</h2>

<p align="center">
  A professional publishing platform built on Node.js, featuring MySQL database support, Cloudinary image storage, and Mailgun email integration
</p>

## About this boilerplate

This boilerplate is a pre-configured Ghost blog setup optimized for deployment on [Railway](https://railway.app?referralCode=-Yg50p). It includes a complete backend and admin dashboard, with support for MySQL database, Cloudinary image storage, and Mailgun email integration. The project is ready to use as-is when hosted on Railway.

Updated to `version 5.112.0` 🥳

## Preconfigured Features & Integrations

- **MySQL Database**: Robust and reliable database storage
- **Cloudinary Integration**: Cloud-based image storage with local fallback
- **Mailgun Integration**: Professional email delivery service
- **Admin Dashboard**: Full-featured content management system
- **SEO Optimized**: Built-in SEO tools and features

### Railway Setup (Recommended)

1. Use the one-click deploy template:

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/ZQcedl?referralCode=-Yg50p)

2. Railway will automatically configure the following environment variables:
```env
DB_HOST="${MySQL.MYSQLHOST}"
DB_NAME="${MySQL.MYSQLDATABASE}"
DB_USER="${MySQL.MYSQLUSER}"
DB_PASSWORD="${MySQL.MYSQLPASSWORD}"
PUBLIC_URL="https://${RAILWAY_PUBLIC_DOMAIN}"
NODE_ENV="production"
```

3. Optional: Configure additional integrations:
```env
# Cloudinary Configuration (optional)
CLOUDINARY_URL="" # Example: cloudinary://<id>:<secret>@<cloud-name>

# Mailgun Configuration (optional)
MAILGUN_SMTP_LOGIN="" # Example: your@mail.com
MAILGUN_SMTP_PASSWORD=""
```

### Local Development (Optional)

While the project is ready to use as-is on Railway, if you need to make customizations:

1. Deploy to Railway first (using button above)
2. Use Railway's "Eject to Git Repository" feature to create your own repository
3. Clone your ejected repository locally

This approach ensures your local development remains connected to Railway's CI/CD pipeline.

After cloning your ejected repository:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your environment configuration:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Configure your `.env` file with appropriate values:
     ```env
     # Basic Configuration
     PUBLIC_URL=http://localhost:2368
     PORT=2368

     # Database Configuration
     DB_HOST=localhost
     DB_USER=your_database_user
     DB_PASSWORD=your_database_password
     DB_NAME=ghost

     # Mail Configuration (optional)
     MAILGUN_SMTP_LOGIN=postmaster@your-domain.mailgun.org
     MAILGUN_SMTP_PASSWORD=your_mailgun_password

     # Cloudinary Configuration (optional)
     CLOUDINARY_URL=cloudinary://your_api_key:your_api_secret@your_cloud_name
     CLOUDINARY_FOLDER=ghost-blog-images

     # Webhook Configuration (Cloudflare Access Service Tokens) - optional
     CLOUDFLARE_WEBHOOK_CLIENT_ID=your_client_id
     CLOUDFLARE_WEBHOOK_CLIENT_SECRET=your_client_secret
     ```

3. Run post-installation setup:
   ```bash
   npm run postinstall
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Requirements

- **Railway Account** for deployment
- **MySQL Database** (automatically provisioned by Railway)
- **Cloudinary Account** (optional, falls back to local storage)
- **Mailgun Account** (optional, for email delivery)

### Commands

- `npm install` - Install dependencies
- `npm run postinstall` - Run post-installation setup
- `npm run dev` - Start development server
- `npm start` - Start production server

<p align="center">
  <a href="https://funkyton.com/">
    A template by,
    <br><br>
    <picture>
      <img alt="FUNKYTON logo" src="https://res-5.cloudinary.com/hczpmiapo/image/upload/q_auto/v1/ghost-blog-images/funkyton-logo.png" width=200>
    </picture>
  </a>
</p>
