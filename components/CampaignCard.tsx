// Components
import Link from 'next/link'

type Props = {
  title: string
  address: string
  submissionDate: string
}

function CampaignCard({ title, submissionDate, address }: Props) {
  return (
    <Link
      href={address}
      className="d-block border border-primary rounded mb-3 px-3 pt-3"
    >
      <h3>{title}</h3>
      <p>
        <em>{submissionDate}</em>
      </p>
    </Link>
  )
}
export default CampaignCard
