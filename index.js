#!/usr/bin/env node

//Dependencies

//Imports
const pkgJSON = require('./package.json');

console.clear();

console.log(`
Name: ${pkgJSON.name}
Version: ${pkgJSON.version}
Description: ${pkgJSON.description}
`);

console.log(`
Whale Tracker

`);
