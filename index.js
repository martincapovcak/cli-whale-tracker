#!/usr/bin/env node

//Dependencies

//Build-in modules

//Imports
const pkgJSON = require('./package.json')
const init = require('./utils/init')
const log = require('./utils/helpers/logs')
const getPrompts = require('./utils/prompts.js')
const { formatPrice } = require('./utils/helpers/format-price')

//Constants
const args = process.argv.slice(2)

// Logic
;(async () => {
	init()

	log('Quick setup: \n')
	const response = await getPrompts()
	console.clear()

	log('>_\n')
	log('Welcome to whale tracker \n')
	if (response.value) {
		log('-------------------------')
		log(`Coin: ${'Token Name'}`) // place token name from chain here
		log(`Treshold: ${formatPrice(response.treshold)}`)
		log('-------------------------')
	}
})() // IFIE foo
