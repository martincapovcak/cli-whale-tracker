const { formatPrice } = require('./helpers/format-price.js')
const { green, yellow, bold } = require('chalk')
const { ethers, Contract } = require('ethers')

const getJson = require('./helpers/getJson.js')
const { formatPriceBigNumber } = require('./helpers/format-price.js')
const playSound = require('./helpers/play-sound.js')
const handleError = require('./helpers/handle-errors.js')

const { RPC_URL } = require('../constants/rpc.config.js')

const rpcURL = RPC_URL
const provider = new ethers.providers.JsonRpcProvider(rpcURL)

const sonar = async (whaleActivity = {}) => {
	const CONTRACT_ABI = getJson(`${APP_ROOT}/data/dummy_abi.json`)
	const CONTRACT_ADDRESS = whaleActivity.token
	let transfer_treshold = whaleActivity.treshold

	let counter = 0

	try {
		const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)

		const tokenName = await contract.name()
		const decimals = await contract.decimals()
		transfer_treshold *= `1e${decimals}`

		console.clear()

		console.log(green.bold('\n>_\n'))
		console.log('Sonar is up and running..')
		console.log('->')
		console.log(`-> Listening for ${tokenName} whales`)
		console.log(`-> Treshold: ${formatPrice(whaleActivity.treshold)} ${tokenName}s`)
		console.log('-------------------------')
		console.log('\n')

		playSound(`${APP_ROOT}/assets/sound/sonar-ping.mp3`)

		contract.on('Transfer', (from, to, value, data) => {
			const bigIntValue = BigInt(value)
			const bigIntTreshold = BigInt(transfer_treshold)
			if (bigIntValue >= bigIntTreshold) {
				playSound(`${APP_ROOT}/assets/sound/whale.mp3`)
				counter++

				console.log(bold('Whale detected'))
				console.log(`-> ${formatPriceBigNumber(bigIntValue, decimals)} ${tokenName}s`)
				console.log(`-> tx: https://etherscan.io/tx/${data.transactionHash}`)
				console.log('---------------------------')
			}
		})

		setInterval(() => {
			playSound(`${APP_ROOT}/assets/sound/sonar-ping.mp3`)

			if (counter > 0) {
				console.log(`>>> ${bold(counter)} whale${counter == 1 ? '' : 's'} spotted\n`)
				counter = 0
			} else {
				console.log('~')
			}
		}, 10000)
	} catch (error) {
		handleError(`SONAR FAILED`, error, false, true)
	}
}

module.exports = sonar
