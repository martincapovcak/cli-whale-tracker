//Imports
const chalk = require('chalk')
const pkgJSON = require('../package.json')
const alert = require('./helpers/alerts.js')

//Constants
const head = `
${chalk.bold.inverse(pkgJSON.name)}
Version     : ${pkgJSON.version}
Description : ${pkgJSON.description}
---------------------------`

const init = () => {
	console.clear()
	console.log(chalk.green.bold('\n>_\n'))
	console.log('Root: ', APP_ROOT)
	console.log(head)
	alert({ type: 'info', msg: 'npx whale-tracker --help' })
}

module.exports = init
