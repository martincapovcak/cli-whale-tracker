#!/usr/bin/env node

/**
 * whale-tracker
 * CLI to listen whale activity on a eth blockchain
 */

//Dependencies

//Build-in modules

//Imports
const init = require('./utils/init.js')
const { prompt, defaultResponse } = require('./utils/prompts.js')
const cli = require('./utils/cli.js')
const sonar = require('./utils/sonar.js')

//Constants
//const args = process.argv.slice(2)

// Logic
;(async () => {
	init()
	console.log('cli', cli.input)
	console.log('cli', cli.flags)

	if (cli.flags.default) {
		sonar(defaultResponse)
	}

	if (cli.flags.config) {
		let response = await prompt()
		if (response.token && response.treshold && response.value) {
			sonar(response)
		} else {
			console.log('Wrong input')
		}
	}

	// continue programm
})() // IFIE foo
