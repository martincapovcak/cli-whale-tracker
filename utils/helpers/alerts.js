/**
 * CLI Alerts
 *
 * Cross platform CLI Alerts with colors.
 * Works on macOS, Linux and Windows.
 * Alerts: `success`, `info`, `warrning`, `error`
 *
 * author: Martin Capovcak
 */

const chalk = require('chalk')
const sym = require('log-symbols')

const log = console.log

module.exports = options => {
	const defaultOptions = {
		type: `error`,
		msg: `You forgot to define all options!`,
		name: ''
	}
	const opts = { ...defaultOptions, ...options }
	const { type, msg, name } = opts

	const printName = name ? name : type.toUpperCase()

	if (type === `success`) {
		log(`\n${sym.success} ${chalk.greenBright.bold(` ${printName}: `)} ${chalk.green(msg)}\n`)
	}

	if (type === `error`) {
		log(`\n${sym.error} ${chalk.redBright.bold(` ${printName}: `)} ${chalk.red.bold(msg)}\n`)
	}

	if (type === `warning`) {
		log(
			`\n${sym.warning} ${chalk.keyword('orange').bold(` ${printName}: `)} ${chalk.keyword(
				'orange'
			)(msg)}\n`
		)
	}

	if (type === `info`) {
		log(`\n${chalk.bold(`${printName}: `)}${msg}\n`)
	}
}
