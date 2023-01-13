import type { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
    settings: {
      allowUnlimitedContractSize: true,
      blockGasLimit: 0x1fffffffffffff,
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  paths: {
    sources: './ethereum/contracts',
    artifacts: './ethereum/build',
  },
}

export default config
