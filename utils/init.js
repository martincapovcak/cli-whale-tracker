//Imports
const pkgJSON = require('../package.json');
const log = require('./helpers/logs');

//Constants
const head = `
Name        : ${pkgJSON.name}
Version     : ${pkgJSON.version}
Description : ${pkgJSON.description}
`;

// foo
const init = () => {
	console.clear();
	log(head);
};

module.exports = init;
