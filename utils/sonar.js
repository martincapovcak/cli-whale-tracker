const { formatPrice } = require('./helpers/format-price.js')

const sonar = (searchData = {}) => {
	console.log('\n>_')
	console.log('Sonar is spinning-up.. \n')

	console.log('-------------------------')
	console.log(`Coin: ${'Token Name'}`) // place token name from chain here
	console.log(`Treshold: ${formatPrice(searchData.treshold)}`)
	console.log('-------------------------')
}

module.exports = sonar
