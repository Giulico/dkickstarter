// Types
import type { NextApiRequest, NextApiResponse } from 'next'

// Utils
import { ethers } from 'ethers'
import Campaign from 'ethereum/build/ethereum/contracts/Campaign.sol/Campaign.json'

function getContract(address: string) {
  let contract

  if (address.length >= 40) {
    const RPC = `${process.env.PROVIDER_URL}${process.env.PROVIDER_KEY}`
    const provider = new ethers.providers.JsonRpcProvider(RPC)
    const campaignAddress = address
    contract = new ethers.Contract(campaignAddress, Campaign.abi, provider)
  } else {
    contract = null
  }

  return contract
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let data = {}
  const address = req.query.campaign as string
  const contract = await getContract(address)

  if (!contract) {
    res.status(500).json({ message: 'Invalid arguments' })
    return
  }

  const fields = [
    'manager',
    'title',
    'description',
    'submissionDate',
    'minimumContribution',
    'fundersCount',
    'requestCount',
  ]

  const fetches = fields.map((field) => contract[field]())
  data = await Promise.all(fetches).then((res) =>
    res.reduce(
      (prev, curr, index) => ({
        ...prev,
        [fields[index]]: curr,
      }),
      {}
    )
  )

  res.status(200).json(data)
}
