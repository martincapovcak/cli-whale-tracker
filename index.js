#!/usr/bin/env node

/**
 * whale-tracker
 * CLI to listen whale activity on a eth blockchain
 */

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

global.APP_ROOT = __dirname

unhandled()
const promptConfirmErr = new Error('CONFIRMATION_REQUIRED')
//Promise.reject(new Error('THIS_IS_UNHANDLED'))

// Logic
;(async () => {
	init()

	// Show help
	input.includes('help') && cli.showHelp(0)

	// Spinn-up sonar with default setings
	flags.default && (await sonar(defaultResponse))

	// Prompt user
	if (flags.config) {
		let response = await prompt()
		!response.value && handleError(`SONAR WASN'T ENABLED`, promptConfirmErr, false, true)
		// Spinn-up sonar with custom settings
		alert({ type: 'success', msg: 'Heating-up..' })
		await sonar(response)
	}
})()
