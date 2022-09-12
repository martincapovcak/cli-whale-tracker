const { formatPrice } = require('./helpers/format-price.js')
const { green, yellow, bold } = require('chalk')
const { ethers, Contract } = require('ethers')

const getJson = require('./helpers/getJson.js')
const { formatPriceBigNumber } = require('./helpers/format-price.js')
const playSound = require('./helpers/play-sound.js')
const { RPC_URL } = require('../constants/rpc.config.js')
const { soundFx } = require('../constants/sounds.config.js')

const rpcURL = RPC_URL
const provider = new ethers.providers.JsonRpcProvider(rpcURL)

const sonar = async (whaleActivity = {}) => {
	const CONTRACT_ABI = getJson('./data/dummy_abi.json')
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
		console.log('Sonar is spinning-up..')
		console.log('->')
		console.log(`-> Listening for ${tokenName} whales.`)
		console.log(`-> Treshold: ${formatPrice(whaleActivity.treshold)} ${tokenName}s`)
		console.log('-------------------------')
		console.log('\n')

		playSound(soundFx.sonar)

		contract.on('Transfer', (from, to, value, data) => {
			const bigIntValue = BigInt(value)
			const bigIntTreshold = BigInt(transfer_treshold)
			if (bigIntValue >= bigIntTreshold) {
				playSound(soundFx.whale)
				counter++

				console.log(bold('Whale detected'))
				console.log(`-> ${formatPriceBigNumber(bigIntValue, decimals)} ${tokenName}s`)
				console.log(`-> tx: https://etherscan.io/tx/${data.transactionHash}`)
				console.log('---------------------------')
			}
		})

		setInterval(() => {
			playSound(soundFx.sonar)

			if (counter > 0) {
				console.log('Whales spoted:', yellow(counter))
				console.log('\n')
				counter = 0
			}
		}, 10000)
	} catch (err) {
		console.log('Opps someting went wrong.', err)
	}
}

module.exports = sonar
