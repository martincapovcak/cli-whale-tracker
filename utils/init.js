//Imports
const chalk = require('chalk')
const pkgJSON = require('../package.json')

//Constants
const head = `
${chalk.bold.inverse(pkgJSON.name)}
Version     : ${pkgJSON.version}
Description : ${pkgJSON.description}
---------------------------`

const init = () => {
	console.clear()
	console.log(chalk.green.bold('\n>_\n'))
	console.log(head)
}

module.exports = init
