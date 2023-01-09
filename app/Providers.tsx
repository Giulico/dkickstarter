'use client'

import type { ReactNode } from 'react'

import { store } from 'store'
import { Provider } from 'react-redux'

// Bootstrap
import ThemeProvider from 'react-bootstrap/ThemeProvider'

type Props = {
  children: ReactNode
}

function Providers({ children }: Props) {
  return (
    <ThemeProvider breakpoints={['xl', 'md']}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  )
}
export default Providers
