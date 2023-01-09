'use client'

import type { ReactNode } from 'react'

import Container from 'react-bootstrap/Container'

type Props = {
  children: ReactNode
}

function AppMain({ children }: Props) {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  )
}
export default AppMain
