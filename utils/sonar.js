const { formatPrice } = require('./helpers/format-price.js')

const sonar = (whaleActivity = {}) => {
	console.log('\n>_')
	console.log('Sonar is spinning-up.. \n')

	console.log('-------------------------')
	console.log(`Coin: ${'Token Name'}`) // place token name from chain here
	console.log(`Treshold: ${formatPrice(whaleActivity.treshold)}`)
	console.log('-------------------------')
}

module.exports = sonar
