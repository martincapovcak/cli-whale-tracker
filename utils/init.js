//Imports
const pkgJSON = require('../package.json');
const log = require('./helpers/logs');

//Constants

const init = () => {
	console.clear();

	log(`
Name        : ${pkgJSON.name}
Version     : ${pkgJSON.version}
Description : ${pkgJSON.description}
`);
};

module.exports = init;
