'use client'

// Utils
import { bigNumberToDate } from 'utils/date'

// Types
import type { RootState } from 'store'

// Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CreateCampaignForm from './CreateCampaignForm'
import HomeWalletConnect from './HomeWalletConnect'

// Hooks
import { useSelector } from 'react-redux'

type Campaign = [string, { hex: string }, string]

type Props = {
  campaigns: Campaign[]
}

function HomeCampaigns({ campaigns }: Props) {
  const wallet = useSelector((state: RootState) => state.wallet)
  const { account } = wallet

  return (
    <Container>
      <Row>
        <Col md="6">
          {campaigns.map((campaign) => {
            const [title, submissionDate, address] = campaign
            return (
              <div key={title}>
                <h3>{title}</h3>
                <p>
                  <em>{bigNumberToDate(submissionDate)}</em>
                </p>
                <em>{address}</em>
              </div>
            )
          })}
        </Col>
        <Col md="6">
          {account ? <CreateCampaignForm /> : <HomeWalletConnect />}
        </Col>
      </Row>
    </Container>
  )
}
export default HomeCampaigns
