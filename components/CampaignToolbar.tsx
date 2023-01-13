'use client'

// Components
import Link from 'next/link'
import Button from 'react-bootstrap/Button'

type Props = {
  address: string
}

function CampaignToolbar({ address }: Props) {
  return (
    <div className="mb-5">
      <small>You are the manager of this campaign</small>
      <div className="mt-2">
        <Link
          href={`/${address}/create-spending-request`}
          className="btn btn-dark btn-sm"
        >
          + Spending review
        </Link>
      </div>
    </div>
  )
}

export default CampaignToolbar
