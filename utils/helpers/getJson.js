const fs = require('fs')

const getJson = path => {
	if (path) {
		const data = fs.readFileSync(path, 'utf8')
		const json = JSON.parse(data)
		return json
	} else {
		return {}
	}
}

module.exports = getJson
