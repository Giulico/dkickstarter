'use client'

import type { ReactNode } from 'react'

import Container from 'react-bootstrap/Container'

type Props = {
  children: ReactNode
}

function AppFooter({ children }: Props) {
  return (
    <header>
      <Container>{children}</Container>
    </header>
  )
}
export default AppFooter
