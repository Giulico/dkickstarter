'use client'
// Types
import type { RootState, AppDispatch } from 'store'

// Actions
import { connection } from 'store/slices/wallet'

// Utils
import { ethers, BigNumber, BigNumberish } from 'ethers'

// Components
import CampaignToolbar from './CampaignToolbar'
import CampaignDescription from './CampaignDescription'
import CampaignRequests from './CampaignRequests'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Contribute from './Contribute'

// Hooks
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'

type Props = {
  address: string
  balance: BigNumber & { hex: string }
  description: string
  fundersCount: number
  manager: string
  minimumContribution: BigNumberish
  requestCount: number
  submissionDate: BigNumber & { hex: string }
  title: string
}

function CampaignOverview({
  address,
  balance,
  description,
  fundersCount,
  manager,
  minimumContribution,
  requestCount,
  submissionDate,
  title,
}: Props) {
  const dispatch = useDispatch<AppDispatch>()
  const wallet = useSelector((state: RootState) => state.wallet)
  const { isConnecting } = wallet

  const connectionHandler = useCallback(() => {
    dispatch(connection())
  }, [dispatch])

  const requestCountInt = parseInt(ethers.utils.formatUnits(requestCount, 0))

  return (
    <Container>
      <Row>
        <Col md="7">
          {manager.toLowerCase() === wallet.account?.toLowerCase() && (
            <CampaignToolbar address={address} />
          )}
          <CampaignDescription
            title={title}
            balance={balance}
            description={description}
            minimumContribution={minimumContribution}
            submissionDate={submissionDate}
            fundersCount={fundersCount}
          />
          {requestCountInt > 0 && <CampaignRequests />}
        </Col>
        <Col md={{ span: 4, offset: 1 }}>
          <h3>Do you like this idea?</h3>
          <p>Support the project, just because it speaks to you.</p>
          {wallet.account ? (
            <Contribute address={address} manager={manager} />
          ) : (
            <Button
              disabled={isConnecting}
              variant="primary"
              size="lg"
              onClick={connectionHandler}
            >
              Connect wallet
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  )
}
export default CampaignOverview
