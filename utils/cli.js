const meow = require('meow')

const helpText = `
Usage
    $ npx whale-tracker [options]

Options
    --default   Default search
    --config    Custom your search

Examples
    $ npx whale-tracker --config
`
const options = {
	flags: {
		default: {
			type: 'boolean',
			default: false
		},
		config: {
			type: 'boolean',
			default: false
		},
		head: {
			type: 'boolean',
			default: true
		}
	}
}

module.exports = meow(helpText, options)
