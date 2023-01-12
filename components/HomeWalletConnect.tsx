'use client'

// Types
import type { RootState, AppDispatch } from 'store'

// Actions
import { connection } from 'store/slices/wallet'

// Hooks
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'

// Components
import Button from 'react-bootstrap/Button'

const HomeWalletConnect = () => {
  const dispatch = useDispatch<AppDispatch>()
  const wallet = useSelector((state: RootState) => state.wallet)
  const { isConnecting } = wallet

  const connectionHandler = useCallback(() => {
    dispatch(connection())
  }, [dispatch])

  return (
    <div className="text-center px-5">
      <h2>Make your idea a real project!</h2>
      <p>
        To start raising funds connect your Metamask account and sumbit your
        idea&apos;s details.
      </p>
      <Button
        disabled={isConnecting}
        variant="primary"
        size="lg"
        onClick={connectionHandler}
      >
        Connect account
      </Button>
    </div>
  )
}
export default HomeWalletConnect
