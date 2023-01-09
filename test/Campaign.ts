import { assert, expect } from 'chai'

import compiledCampaign from '../ethereum/build/ethereum/contracts/Campaign.sol/Campaign.json'

let owner
let otherAccounts
let factory
let campaignAddress
let campaign

beforeEach(async () => {
  ;[owner, ...otherAccounts] = await ethers.getSigners()
  const factoryContract = await ethers.getContractFactory('CampaignFactory')
  factory = await factoryContract.deploy()

  await factory.createCampaign(
    'Campaign title',
    'Lorem ipsum dolor sit amet...',
    '100'
  )
  ;[campaignAddress] = await factory.getDeployedCampaigns()

  campaign = new ethers.Contract(campaignAddress, compiledCampaign.abi, owner)
})

describe('Campaigns', () => {
  it('Factory and Campaign are deployed', () => {
    assert.ok(factory.address)
    assert.ok(campaign.address)
  })

  it('Campaign should have the right owner', async () => {
    const manager = await campaign.manager()
    const title = await campaign.title()

    assert.equal(title, 'Campaign title')
    assert.equal(manager, owner.address)
  })

  it('Can contribute', async () => {
    const { contribute, approvers } = campaign

    await campaign.connect(otherAccounts[1]).contribute({ value: '200' })

    const isApprover = await campaign.funders(otherAccounts[1].address)
    assert(isApprover)
  })

  it('Has a minimum contribution', async () => {
    let isAccepted = true

    await campaign
      .connect(otherAccounts[1])
      .contribute({ value: '50' })
      .catch(() => {
        isAccepted = false
      })

    assert.equal(isAccepted, false)
  })

  it('Manager can create a spending request', async () => {
    const desc = 'I need to do this thing'
    await campaign
      .connect(owner)
      .createRequest(desc, '100', otherAccounts[1].address)

    const request = await campaign.requests(0)

    assert.equal(request.description, desc)
  })

  it('Request finalization', async () => {
    const initialBalance = ethers.utils.formatEther(
      await ethers.provider.getBalance(otherAccounts[5].address)
    )

    // User contribute
    await campaign.connect(otherAccounts[1]).contribute({
      value: ethers.utils.parseEther('10'),
    })

    // Manager create a requst
    await campaign
      .connect(owner)
      .createRequest(
        'I have to do this thing',
        ethers.utils.parseEther('10'),
        otherAccounts[5].address
      )

    // User 1 approve the first request
    await campaign.connect(otherAccounts[1]).approveRequest(0)

    // Manager finalize the request
    await campaign.connect(owner).finalizeRequest(0)

    // Test
    const finalBalance = ethers.utils.formatEther(
      await ethers.provider.getBalance(otherAccounts[5].address)
    )

    assert.equal(parseInt(finalBalance) - parseInt(initialBalance), 10)
  })
})
