const { formatPrice } = require('./helpers/format-price.js')
const { green, bold } = require('chalk')
const { ethers, Contract } = require('ethers')

const getJson = require('./helpers/getJson.js')
const { formatPriceBigNumber } = require('./helpers/format-price.js')
const playSound = require('./helpers/play-sound.js')
const { RPC_URL } = require('../constants/config.js')

const rpcURL = RPC_URL
const provider = new ethers.providers.JsonRpcProvider(rpcURL)

const CONTRACT_ABI = getJson('./data/dummy_abi.json')

const sonar = async (whaleActivity = {}) => {
	const contract = new Contract(whaleActivity.token, CONTRACT_ABI, provider)

	const tokenName = await contract.name()
	const decimals = await contract.decimals()
	let transfer_treshold = whaleActivity.treshold
	transfer_treshold *= `1e${decimals}`

	console.clear()
	console.log('\n')
	console.log(green.bold('>_'))
	console.log('\n')
	console.log('Sonar is spinning-up..')
	console.log('->')
	playSound('./assets/sound/sonar-ping.mp3')
	console.log(`-> Listening for ${tokenName} whales.`)
	console.log(`-> Treshold: ${formatPrice(whaleActivity.treshold)} ${tokenName}s`)
	console.log('-------------------------')
	console.log('\n')

	contract.on('Transfer', (from, to, value, data) => {
		if (value.toNumber() >= transfer_treshold) {
			playSound('./assets/sound/whale.mp3')
			const amount = value.toNumber()
			console.log('---------------------------')
			console.log('Whale detected')
			console.log(`-> ${formatPriceBigNumber(amount, decimals)} ${tokenName}s`)
			//console.log(`-> to: ${to}`)
			console.log(`-> tx: https://etherscan.io/tx/${data.transactionHash}`)
		}
	})

	setInterval(() => {
		playSound('./assets/sound/sonar-ping.mp3')
	}, 10000)
}

module.exports = sonar
