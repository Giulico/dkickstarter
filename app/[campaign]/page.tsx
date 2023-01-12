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

const getCampaign = async (address: string) => {
  const res = await fetch(`${BASE_HOST}/api/campaigns/${address}`)
  if (res.status > 400) {
    return []
  }

  return await res.json()
}

async function CampaignPage({ params: { campaign } }: Props) {
  let campaignData
  if (campaign.length >= 40) {
    campaignData = await getCampaign(campaign)
  } else {
    return null
  }

  return (
    <>
      <div className="px-3 my-5">
        <Link href="/">← Go back</Link>
      </div>
      <CampaignOverview
        address={campaign}
        manager={campaignData.manager}
        title={campaignData.title}
        description={campaignData.description}
        minimumContribution={campaignData.minimumContribution}
        submissionDate={campaignData.submissionDate}
      />
    </>
  )
}
export default CampaignPage
