#!/usr/bin/env node

//Dependencies

//Build-in modules

//Imports
const pkgJSON = require('./package.json')
const init = require('./utils/init')
const log = require('./utils/helpers/logs')
const getPrompts = require('./utils/prompts.js')

//Constants
const args = process.argv.slice(2)

// Logic
;(async () => {
	init()

	log('Whale Tracker')

	const response = await getPrompts()

	if (response) {
		console.log(response)
	}
})() // IFIE foo
