require('dotenv').config({ path: './.env.local' })
const ethers = require('ethers')
const { Wallet } = require('ethers')

const {
  abi,
  bytecode,
} = require('./build/ethereum/contracts/CampaignFactory.sol/CampaignFactory.json')

const mnemonic = process.env.ROOT_MNEMONIC
const infuraKey = process.env.PROVIDER_KEY

const provider = new ethers.providers.InfuraProvider('goerli', infuraKey)
const wallet = Wallet.fromMnemonic(mnemonic)
const account = wallet.connect(provider)

async function main() {
  const contract = new ethers.ContractFactory(abi, bytecode, account)
  const deployedContract = await contract.deploy()

  console.log(
    '┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓'
  )
  console.log(`┃ Contract address: ${deployedContract.address} ┃`)
  console.log(
    '┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'
  )
  console.log('Copy it:')
  console.log('- in .env.local file')
  console.log('- in production')
}

main()
