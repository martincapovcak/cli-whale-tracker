#!/usr/bin/env node

//Dependencies

//Imports
const pkgJSON = require('./package.json');
const init = require('./utils/init');
const log = require('./utils/helpers/logs');

//Constants

// Logic
(() => {
	init();

	log('Whale Tracker');
})(); // IFIE foo
