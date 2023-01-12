'use client'

// Utils
import { bigNumberToDate } from 'utils/date'
import { ethers, BigNumber, BigNumberish } from 'ethers'

// Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Contribute from './Contribute'

type Props = {
  address: string
  manager: string
  title: string
  description: string
  minimumContribution: BigNumberish
  submissionDate: BigNumber & { hex: string }
}

function CampaignOverview({
  address,
  manager,
  title,
  description,
  minimumContribution,
  submissionDate,
}: Props) {
  return (
    <Container>
      <Row>
        <Col md="8">
          <span className="text-muted">{bigNumberToDate(submissionDate)}</span>
          <h1>{title}</h1>
          <p>
            <strong>Minimum contribution: </strong>
            <Badge bg="success">
              {ethers.utils.formatEther(minimumContribution)} ETH
            </Badge>
          </p>
          <p>{description}</p>
        </Col>
        <Col md="4">
          <Contribute address={address} manager={manager} />
        </Col>
      </Row>
    </Container>
  )
}
export default CampaignOverview
