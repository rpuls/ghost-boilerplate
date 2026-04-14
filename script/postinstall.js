#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const createConfigPath = path.join(__dirname, 'create-config.js');
const adapterPath = path.join(__dirname, '..', 'content', 'adapters', 'storage', 'cloudinary-storage');

console.log('Ghost 6 Railway postinstall');
console.log(`create-config.js: ${fs.existsSync(createConfigPath) ? 'present' : 'missing'}`);
console.log(`Cloudinary adapter: ${fs.existsSync(adapterPath) ? 'present' : 'missing'}`);

require('./create-config');
