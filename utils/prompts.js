//Dependencies
const prompts = require('prompts')
const { tokens } = require('../data/dummy-data')
const ethers = require('ethers')

const defaultResponse = {
	token: tokens.usdc.address,
	treshold: 100000,
	value: true
}

const questions = [
	{
		type: 'select',
		name: 'token',
		message: 'Which token you want to track?',
		choices: [
			{ title: 'USDC', value: tokens.usdc.address },
			{ title: 'USDT', value: tokens.usdt.address },
			{ title: 'DAI', value: tokens.dai.address },
			{
				title: 'Other',
				description: 'You will need to paste token contract address',
				value: false
			}
		],
		initial: 0
	},
	{
		type: prev => (prev == false ? 'text' : null),
		name: 'token',
		message: 'Paste in a token contract address. ',
		validate: address => (ethers.utils.isAddress(address) ? true : `Address is not valid`)
	},
	{
		type: 'select',
		name: 'treshold',
		message: 'Choose a whale transfer size:',
		choices: [
			{ title: '100,000', value: 100000 },
			{ title: '1,000,000', value: 1000000 },
			{ title: '10,000,000', value: 10000000 },
			{ title: 'Other', value: false }
		],
		initial: 0
	},
	{
		type: prev => (prev == false ? 'number' : null),
		name: 'treshold',
		message: 'Set minimal coin transfer you want listen to:',
		validate: value => (value < 10 ? `Minimal value as a whale transaction is to low` : true),
		initial: 1000
	},
	{
		type: 'toggle',
		name: 'value',
		message: 'Can you confirm?',
		initial: true,
		active: 'yes',
		inactive: 'no'
	}
]

async function prompt() {
	return await prompts(questions)
}

module.exports = { prompt, defaultResponse }
