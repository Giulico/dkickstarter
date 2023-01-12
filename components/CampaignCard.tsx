// Components
import Link from 'next/link'

type Props = {
  title: string
  address: string
  submissionDate: string
}

function CampaignCard({ title, submissionDate, address }: Props) {
  return (
    <div className="border border-primary rounded mb-3 px-3 pt-2">
      <Link href={address}>
        <h3>{title}</h3>
        <p>
          <em>{submissionDate}</em>
        </p>
      </Link>
    </div>
  )
}
export default CampaignCard
