// Types
import type { NextApiRequest, NextApiResponse } from 'next'

// Utils
import { ethers } from 'ethers'
import Campaign from 'ethereum/build/ethereum/contracts/Campaign.sol/Campaign.json'

function getContract(address: string) {
  let contract
  let provider

  if (address.length >= 40) {
    const RPC = `${process.env.PROVIDER_URL}${process.env.PROVIDER_KEY}`
    provider = new ethers.providers.JsonRpcProvider(RPC)
    contract = new ethers.Contract(address, Campaign.abi, provider)
  } else {
    contract = null
  }

  return { contract, provider }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let data = {}
  const address = req.query.campaign as string
  const { contract, provider } = await getContract(address)

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

  const balance = await (
    provider as ethers.providers.JsonRpcProvider
  ).getBalance(contract.address)

  const fetches = fields.map((field) => contract[field]())
  data = await Promise.all(fetches).then((res) =>
    Object.assign(
      res.reduce(
        (prev, curr, index) => ({
          ...prev,
          [fields[index]]: curr,
        }),
        {}
      ),
      { balance }
    )
  )

  res.status(200).json(data)
}
