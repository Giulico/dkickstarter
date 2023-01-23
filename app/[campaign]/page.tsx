// Type
import type { BigNumber } from 'ethers'

// Utils
import { BASE_HOST } from 'utils/const'

// Components
import Link from 'next/link'
import CampaignOverview from 'components/CampaignOverview'

type Props = {
  params: {
    campaign: string
  }
}

type Campaign = [string, BigNumber & { hex: string }, string]

const getCampaign = (address: string) => {
  console.log('\n\n[campaign]\n', `${BASE_HOST}/api/campaigns/${address}\n\n`)
  return fetch(`${BASE_HOST}/api/campaigns/${address}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err)
      return {}
    })
}

// const getCampaigns = () => {
//   return fetch(`${BASE_HOST}/api/campaigns`)
//     .then((res) => res.json())
//     .catch(() => {
//       return {}
//     })
// }

// ! This page must be SSR
// export async function generateStaticParams() {
//   const campaigns = await getCampaigns()
//   return campaigns.map((campaign: Campaign) => {
//     const [title, submissionDate, address] = campaign
//     return {
//       campaign: address,
//     }
//   })
// }

async function CampaignPage({ params: { campaign } }: Props) {
  const data = await getCampaign(campaign)

  console.log('DATA', data)

  return data.manager ? (
    <>
      <div className="px-3 my-5">
        <Link href="/">← Go back</Link>
      </div>
      <CampaignOverview
        address={campaign}
        balance={data.balance}
        description={data.description}
        fundersCount={data.fundersCount}
        manager={data.manager}
        minimumContribution={data.minimumContribution}
        requestCount={data.requestCount}
        submissionDate={data.submissionDate}
        title={data.title}
      />
    </>
  ) : null
}
export default CampaignPage
