#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');

const exists = (relativePath) => fs.existsSync(path.join(root, relativePath));

const logCheck = (label, value) => {
  console.log(`[startup] ${label}: ${value}`);
};

process.on('uncaughtException', (error) => {
  console.error('[startup] uncaughtException');
  console.error(error && error.stack ? error.stack : error);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('[startup] unhandledRejection');
  console.error(reason && reason.stack ? reason.stack : reason);
  process.exit(1);
});

const packageJson = require('../package.json');

logCheck('cwd', process.cwd());
logCheck('node', process.version);
logCheck('ghost', packageJson.version);
logCheck('NODE_ENV', process.env.NODE_ENV || '(unset)');
logCheck('PORT', process.env.PORT || '(unset)');
logCheck('PUBLIC_URL', process.env.PUBLIC_URL || '(unset)');
logCheck('RAILWAY_VOLUME_MOUNT_PATH', process.env.RAILWAY_VOLUME_MOUNT_PATH || '(unset)');
logCheck('config.production.json', exists('config.production.json') ? 'present' : 'missing');
logCheck('cloudinary adapter', exists('content/adapters/storage/cloudinary-storage/index.js') ? 'present' : 'missing');
logCheck('casper theme', exists('content/themes/casper/package.json') ? 'present' : 'missing');
logCheck('source theme', exists('content/themes/source/package.json') ? 'present' : 'missing');

require('../index');
