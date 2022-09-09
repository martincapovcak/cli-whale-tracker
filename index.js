#!/usr/bin/env node

//Dependencies
const chalk = require('chalk');

//Imports
const pkgJSON = require('./package.json');

//Constants
const log = console.log;
const bold = chalk.bold;
const dim = chalk.dim;
const line = () => log('---------------------------');

console.clear();

log(`
Name        : ${bold(pkgJSON.name)}
Version     : ${bold(pkgJSON.version)}
Description : ${pkgJSON.description}
`);

line();

log(`
Whale Tracker

`);
