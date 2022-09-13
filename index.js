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
	alert({ type: 'info', msg: '--help' })

	input.includes('help') && cli.showHelp(0)

	// Spinn-up sonar with default setings
	flags.default && (await sonar(defaultResponse))

	// Prompt user
	if (flags.config) {
		let response = await prompt()
		if (!response.value) {
			alert({ type: 'error', msg: 'you didnt confirm data' })
			process.exit()
		}
		// Spinn-up sonar with default setings
		if (response.token && response.treshold) {
			//console.log('\n-> Heating-up..\n')
			alert({ type: 'success', msg: 'Heating-up..' })
			await sonar(response)
		} else {
			console.log('Oops.. someting went wrong.')
		}
	}
})()
