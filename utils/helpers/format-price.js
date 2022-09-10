// format price as "en-US"
const formatPrice = _num => {
	const USformatedPrice = Intl.NumberFormat('en-US', { style: 'decimal' })
	return USformatedPrice.format(_num.toFixed(2))
}

// Get price from smart contract BigNumber and format it as "en-US"
const formatPriceBigNumber = (_num, _decimals) => {
	let price = _num / `1e${_decimals}`

	const USformatedPrice = Intl.NumberFormat('en-US', { style: 'decimal' })
	return USformatedPrice.format(price.toFixed(2))
}

module.exports = { formatPrice, formatPriceBigNumber }
