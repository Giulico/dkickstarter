'use client'

import type { ReactElement } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

type Props = {
  logo: ReactElement
  account: ReactElement
}

function AppHeader({ logo, account }: Props) {
  return (
    <header className="py-3">
      <Container>
        <Row>
          <Col>{logo}</Col>
          <Col>{account}</Col>
        </Row>
      </Container>
    </header>
  )
}
export default AppHeader
