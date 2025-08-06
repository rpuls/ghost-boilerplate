#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const configPath = path.join(__dirname, '..', 'config.production.json');

function createConfig() {
  const config = {
    url: process.env.PUBLIC_URL,
    server: {
      port: process.env.PORT,
      host: '0.0.0.0'
    },
    database: {
      client: 'mysql',
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME || 'ghost'
      }
    },
    logging: {
      level: 'info',
      transports: ['file', 'stdout']
    },
    process: 'systemd',
    paths: {
      contentPath: path.join(__dirname, '..', '/content/')
    }
  };

  // Mail configuration
  if (process.env.MAILGUN_SMTP_LOGIN && process.env.MAILGUN_SMTP_PASSWORD) {
    console.log('MAILGUN_SMTP_LOGIN and MAILGUN_SMTP_PASSWORD found, setting up SMTP mail transport');
    config.mail = {
      transport: 'SMTP',
      options: {
        service: 'Mailgun',
        auth: {
          user: process.env.MAILGUN_SMTP_LOGIN,
          pass: process.env.MAILGUN_SMTP_PASSWORD
        }
      }
    };
  } else {
    console.log('MAILGUN_SMTP_LOGIN or MAILGUN_SMTP_PASSWORD not found, setting mail transport to Direct');
    config.mail = {
      transport: 'Direct'
    };
  }

  // Cloudinary configuration
  if (process.env.CLOUDINARY_URL) {
    console.log('CLOUDINARY_URL found, setting storage to cloudinary');
    config.storage = {
      active: 'my-cloudinary-adapter',
      cloudinary: {
        useDatedFolder: false,
        upload: {
          use_filename: true,
          unique_filename: false,
          overwrite: false,
          folder: process.env.CLOUDINARY_FOLDER || 'ghost-blog-images',
          tags: ['blog']
        },
        fetch: {
          quality: 'auto',
          secure: true,
          cdn_subdomain: true
        }
      }
    };
  } else {
    console.log('CLOUDINARY_URL not found, setting storage to local');
    // config.storage = {
    //   active: 'LocalFileStorage'
    // };
  }

  // Write the config to the file
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

  console.log('Configuration file created with environment variables and default values.');
}

createConfig();
