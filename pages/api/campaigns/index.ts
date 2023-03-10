import CampaignFactory from 'ethereum/build/ethereum/contracts/CampaignFactory.sol/CampaignFactory.json'
import { NextApiRequest, NextApiResponse } from 'next'
import { ethers } from 'ethers'

function getContract() {
  const RPC = `${process.env.PROVIDER_URL}${process.env.PROVIDER_KEY}`
  const provider = new ethers.providers.JsonRpcProvider(RPC)
  const factoryAddress = process.env
    .NEXT_PUBLIC_CAMPAIGNS_FACTORY_ADDRESS as string
  const contract = new ethers.Contract(
    factoryAddress,
    CampaignFactory.abi,
    provider
  )

  return contract
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let data

  if (req.method === 'PUT') {
    console.log('Request a PUT')
    console.log(req.body)
    data = []
  } else {
    const contract = await getContract()
    const campaigns = await contract.getDeployedCampaigns()

    data = [...campaigns].reverse()
  }

  res.status(200).json(data)
}
