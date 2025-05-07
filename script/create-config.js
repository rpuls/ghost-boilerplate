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
  if (process.env.BREVO_SMTP_LOGIN && process.env.BREVO_SMTP_PASSWORD) {
  console.log('BREVO_SMTP_LOGIN and BREVO_SMTP_PASSWORD found, setting up SMTP mail transport');
  config.mail = {
    transport: 'SMTP',
    options: {
      host: 'smtp-relay.brevo.com',
      port: 587,
      auth: {
        user: process.env.BREVO_SMTP_LOGIN,
        pass: process.env.BREVO_SMTP_PASSWORD
      }
    }
  };
} else {
  console.log('BREVO_SMTP_LOGIN or BREVO_SMTP_PASSWORD not found, setting mail transport to Direct');
  config.mail = {
    transport: 'Direct'
  };
}


  // Write the config to the file
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

  console.log('Configuration file created with environment variables and default values.');
}

createConfig();
