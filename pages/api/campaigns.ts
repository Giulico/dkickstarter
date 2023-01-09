import CampaignFactory from 'ethereum/build/ethereum/contracts/CampaignFactory.sol/CampaignFactory.json'
import { NextApiRequest, NextApiResponse } from 'next'
import { ethers } from 'ethers'

type Resolve = (value: unknown) => void

const getContract = (ms: number) => {
  const RPC = `${process.env.PROVIDER_URL}${process.env.PROVIDER_KEY}`
  const provider = new ethers.providers.JsonRpcProvider(RPC)
  const contract = new ethers.Contract(
    process.env.CAMPAIGNS_FACTORY_ADDRESS,
    CampaignFactory.abi,
    provider
  )

  return contract
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const contract = await getContract()
  const campaings = await contract.getDeployedCampaigns()

  res.status(200).json(campaings)
}
