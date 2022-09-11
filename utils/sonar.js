const { formatPrice } = require('./helpers/format-price.js')
const { green, bold } = require('chalk')
const { ethers, Contract } = require('ethers')

const getJson = require('./helpers/getJson.js')
const { RPC_URL } = require('../constants/config')

const rpcURL = RPC_URL
const provider = new ethers.providers.JsonRpcProvider(rpcURL)

const CONTRACT_ABI = getJson('./data/dummy_abi.json')

const sonar = async (whaleActivity = {}) => {
	const contract = new Contract(whaleActivity.token, CONTRACT_ABI, provider)

	const tokenName = await contract.name()

	console.clear()
	console.log('\n')
	console.log(green.bold('>_'))
	console.log('\n')
	console.log('Sonar is spinning-up..')
	console.log('->')
	console.log(`-> Listening for ${tokenName} whales.`)
	console.log(`-> Treshold: ${formatPrice(whaleActivity.treshold)} ${tokenName}s`)
	console.log('-------------------------')
	console.log('\n')
}

module.exports = sonar
