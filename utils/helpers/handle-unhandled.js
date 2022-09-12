const handleError = require('./handle-errors.js')

module.exports = () => {
	process.on('unhandledRejection', err => {
		handleError('UNHANDLED ERROR', err)
	})
}
