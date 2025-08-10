// scripts/postinstall.js

const fs = require('fs');
const path = require('path');

// Call create-config.js script to set up Ghost configuration
const { exec } = require('child_process');
exec('node script/create-config.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing create-config.js: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
