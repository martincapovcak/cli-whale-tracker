#!/usr/bin/env node

//Dependencies

//Modules
const readline = require('readline')

//Imports
const pkgJSON = require('./package.json')
const init = require('./utils/init')
const log = require('./utils/helpers/logs')

//Constants
const args = process.argv.slice(2)
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

// Logic
;(() => {
	init()

	log('Whale Tracker')
	console.log('args', args)

	rl.question('What do you think of Node.js? ', answer => {
		console.log('Thank you for your feedback: ', answer)
		rl.close()
	})
})() // IFIE foo
