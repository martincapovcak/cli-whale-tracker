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

const alert = require('./utils/helpers/alerts.js')
const handleError = require('./utils/helpers/handle-errors')
const unhandled = require('./utils/helpers/handle-unhandled.js')

//Constants
//const args = process.argv.slice(2)
const input = cli.input
const flags = cli.flags

unhandled()
//Promise.reject(new Error('THIS_IS_UNHANDLED'))

// Logic
;(async () => {
	init()

	input.includes('help') && cli.showHelp(0)

	// temp logs
	//console.log('cli', cli.input)
	//console.log('cli', cli.flags)

	if (cli.flags.default) {
		await sonar(defaultResponse)
	}

	if (cli.flags.config) {
		let response = await prompt()
		if (response.token && response.treshold && response.value) {
			await sonar(response)
		} else {
			console.log('Wrong input')
		}
	}

	// continue programm
})() // IFIE foo
