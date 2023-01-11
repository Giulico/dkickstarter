import HomeDiscover from 'components/HomeDiscover'
import HomeCampaigns from 'components/HomeCampaigns'

const getCampaigns = async () => {
  const host =
    process.env.NEXT_PHASE === 'phase-production-build'
      ? 'https://dkickstarter.vercel.app'
      : 'http://localhost:3000'
  const res = await fetch(`${host}/api/campaigns`)
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
        <h1>Hey!</h1>
        <p>Questo contenuto è in un Server Component e non è interattivo</p>
      </HomeDiscover>
      <HomeCampaigns campaigns={campaigns} />
    </>
  )
  // return <Home campaigns={campaigns} />;
}
