// Utils
import { BASE_HOST } from 'utils/const'

// Components
import HomeDiscover from 'components/HomeDiscover'
import HomeCampaigns from 'components/HomeCampaigns'

const getCampaigns = async () => {
  const res = await fetch(`${BASE_HOST}/api/campaigns`)
  if (res.status > 400) {
    return []
  }

  return await res.json()
}

export default async function Homepage() {
  const campaigns = await getCampaigns()

  return (
    <>
      <HomeDiscover>
        <h1>Bring a creative project to life. Transparently.</h1>
        <p>This PoC simulates Kickstarter in a decentralized context</p>
        <ul>
          <li>Create a campaign and describe your idea</li>
          <li>Open spending requests to transparently use your funds</li>
          <li>Contribute to others campaigns using your GoerliETH</li>
        </ul>
      </HomeDiscover>
      <HomeCampaigns campaigns={campaigns} />
    </>
  )
  // return <Home campaigns={campaigns} />;
}
