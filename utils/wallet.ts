import { ethers } from 'ethers'

const targetNetworkId = '0x5' // Goerli testnet

export const getBalance = async (accounts: string[]) => {
  // Prevents Metamask errors in console
  if (!accounts[0] || accounts[0].length < 40) {
    throw new Error('Account not found')
  }

  const account = accounts[0]

  // Got account, check balance
  const balance = await window.ethereum.request({
    method: 'eth_getBalance',
    params: [account, 'latest'],
  })

  return ethers.utils.formatEther(balance)
}

export const checkNetwork = async () => {
  if (typeof window === 'undefined' || !window.ethereum) {
    throw new Error('checkNetwork works in client only')
  }

  const currentChainId = await window.ethereum.request({
    method: 'eth_chainId',
  })

  // return true if network id is the same
  if (currentChainId === targetNetworkId) {
    return true
  }

  // return false is network id is different
  return false
}

// switches network to the one provided
export const switchNetwork = async () => {
  await window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: targetNetworkId }],
  })
  // refresh
  window.location.reload()
}

export const getMetamaskSigner = (account: string) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const walletAddress = account
  return provider.getSigner(walletAddress)
}
