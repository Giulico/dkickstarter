'use client'

// Utils
import { ethers } from 'ethers'
import { bigNumberToDate } from 'utils/date'

// Types
import type { RootState, AppDispatch } from 'store'

// Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CreateCampaignForm from './CreateCampaignForm'
import HomeWalletConnect from './HomeWalletConnect'

// Hooks
import { useSelector } from 'react-redux'

type Props = {
  campaigns: string[]
}

type Campaign = [string, BigNumber, string]

function HomeCampaigns({ campaigns }: Props) {
  const wallet = useSelector((state: RootState) => state.wallet)
  const { account } = wallet

  return (
    <Container>
      <Row>
        <Col md="6">
          {campaigns.map(([title, submissionDate, address]: Campaign[]) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>
                <em>{bigNumberToDate(submissionDate)}</em>
              </p>
              <em>{address}</em>
            </div>
          ))}
        </Col>
        <Col md="6">
          {account ? <CreateCampaignForm /> : <HomeWalletConnect />}
        </Col>
      </Row>
    </Container>
  )
}
export default HomeCampaigns
