import HomeDiscover from 'components/HomeDiscover'
import HomeCampaigns from 'components/HomeCampaigns'

const getCampaigns = async () => {
  const res = await fetch(`${process.env.BASE_FETCH_URL}/api/campaigns`)
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
