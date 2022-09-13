const meow = require('meow')
const { green, yellow, cyan, bold } = require('chalk')

const helpText = `
Usage
    ${green(`npx whale-tracker`)} ${yellow(`[--options]`)} ${cyan(`<commands>`)}

Options
    ${yellow(`-d --default`)}   Run sonar with default setup
    ${yellow(`-c --config`)}    Run sonar with custom setup
    ${yellow(`-v --version`)}   Print CLI version

Commands
    ${cyan(`help`)}           Print CLI help information

Examples
    ${green(`npx whale-tracker`)} ${yellow(`--config`)}
`
const options = {
	flags: {
		default: {
			type: 'boolean',
			default: false,
			alias: 'd'
		},
		config: {
			type: 'boolean',
			default: false,
			alias: 'c'
		},
		head: {
			type: 'boolean',
			default: true
		},
		version: {
			type: 'boolean',
			default: false,
			alias: 'v'
		}
	},
	description: false,
	hardRejection: false
}

module.exports = meow(helpText, options)
