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
const input = cli.input
const flags = cli.flags

unhandled()
//Promise.reject(new Error('THIS_IS_UNHANDLED'))

// Logic
;(async () => {
	init()

	input.includes('help') && cli.showHelp(0)

	// Spinn-up sonar with default setings
	cli.flags.default && (await sonar(defaultResponse))

	// Prompt user
	if (cli.flags.config) {
		let response = await prompt()
		!response.value && process.exit()
		// Spinn-up sonar with default setings
		response.token && response.treshold
			? await sonar(response)
			: console.log('Oops.. someting went wrong.')
	}
})()
