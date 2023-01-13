// Utils
import { bigNumberToDate } from 'utils/date'
import { ethers, BigNumber, BigNumberish } from 'ethers'

// Components
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'

// Hooks
import { useState } from 'react'

type Props = {
  balance: BigNumber & { hex: string }
  description: string
  fundersCount: number
  minimumContribution: BigNumberish
  submissionDate: BigNumber & { hex: string }
  title: string
}

function CampaignDescription({
  balance,
  description,
  fundersCount,
  minimumContribution,
  submissionDate,
  title,
}: Props) {
  const [funders, setFunders] = useState<number>(
    parseInt(ethers.utils.formatUnits(fundersCount, 0))
  )

  return (
    <>
      <span className="text-muted">{bigNumberToDate(submissionDate)}</span>
      <h1>{title}</h1>
      <p>
        <strong>Pledged: </strong>
        <Badge bg="success">{ethers.utils.formatEther(balance)} ETH</Badge>
      </p>
      <p>
        <strong>Minimum contribution: </strong>
        <Badge bg="success">
          {ethers.utils.formatEther(minimumContribution)} ETH
        </Badge>
      </p>
      <p>{description}</p>
      {funders === 0 ? (
        <Alert variant="success">
          You have the opportunity to be the first supporter of this campaign!
        </Alert>
      ) : (
        <Alert variant="primary">
          Alrady <strong>{funders}</strong> people have contributed to this
          idea.
        </Alert>
      )}
    </>
  )
}
export default CampaignDescription
