'use client'

import type { ReactNode } from 'react'

// Components
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'

type Props = {
  children: ReactNode
}

function HomeDiscover({ children }: Props) {
  return (
    <Container className="mt-5">
      <Row>
        <Col md="6" className="align-self-center">
          <div>{children}</div>
          <Link href="/discover">How it works &rarr;</Link>
        </Col>
        <Col md="6" className="text-center">
          <Image
            alt="Blockchain"
            src="/on_chain.png"
            width="500"
            height="500"
          />
        </Col>
      </Row>
    </Container>
  )
}
export default HomeDiscover
