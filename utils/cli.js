const meow = require('meow')

const helpText = `
Usage
    $ npx whale-tracker [options]

Options
    -d --default   Default search
    -c --config    Custom your search

Examples
    $ npx whale-tracker --config
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
		}
	}
}

module.exports = meow(helpText, options)
