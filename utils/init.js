//Imports
const pkgJSON = require('../package.json')

//Constants
const head = `
Name        : ${pkgJSON.name}
Version     : ${pkgJSON.version}
Description : ${pkgJSON.description}
`

const init = () => {
	console.clear()
	console.log(head)
}

module.exports = init
