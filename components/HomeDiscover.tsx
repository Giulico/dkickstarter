'use client'

import type { ReactNode } from 'react'

// Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

type Props = {
  children: ReactNode
}

function HomeDiscover({ children }: Props) {
  return (
    <Container>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  )
}
export default HomeDiscover
