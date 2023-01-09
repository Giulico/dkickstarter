'use client'

// Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

type Props = {
  campaigns: string[]
}

function HomeCampaigns({ campaigns }) {
  return (
    <Container>
      <Row>
        <Col md="6">
          {campaigns.map((d: string) => (
            <p key={d}>{d}</p>
          ))}
        </Col>
        <Col md="6">right</Col>
      </Row>
    </Container>
  )
}
export default HomeCampaigns
