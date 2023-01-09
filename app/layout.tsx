import type { ReactNode } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

import Providers from './Providers'
import AppHeader from 'components/AppHeader'
import AppMain from 'components/AppMain'
import AppFooter from 'components/AppFooter'
import WalletConnect from 'components/WallectConnect'
import Logo from 'components/Logo'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <Providers>
          <AppHeader logo={<Logo />} account={<WalletConnect />} />
          <AppMain>{children}</AppMain>
        </Providers>
        <AppFooter>
          <p>Decentralized Kickstarter</p>
        </AppFooter>
      </body>
    </html>
  )
}
