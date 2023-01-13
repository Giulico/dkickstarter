'use client'

// Types
import type { RootState, AppDispatch } from 'store'

// Actions
import { checkConnection, connection, reset } from 'store/slices/wallet'

// Hooks
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useCallback } from 'react'

// Components
import Button from 'react-bootstrap/Button'

export default function WalletConnect() {
  const dispatch = useDispatch<AppDispatch>()
  const wallet = useSelector((state: RootState) => state.wallet)
  const { account, balance, isConnecting } = wallet

  const checkAccount = useCallback(() => {
    dispatch(checkConnection())
  }, [dispatch])

  const connectionHandler = useCallback(() => {
    dispatch(connection())
  }, [dispatch])

  const chainChanged = useCallback(() => {
    dispatch(reset())
  }, [dispatch])

  useEffect(() => {
    checkAccount()

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', checkAccount)
      window.ethereum.on('chainChanged', chainChanged)
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', checkAccount)
        window.ethereum.removeListener('chainChanged', chainChanged)
      }
    }
  }, [chainChanged, checkAccount, dispatch])

  return (
    <div className="text-end">
      {account ? (
        <>
          <p>Account: {account}</p>
          <p>
            Balance: {balance} {balance ? 'ETH' : null}
          </p>
        </>
      ) : (
        <Button
          disabled={isConnecting}
          variant="primary"
          onClick={connectionHandler}
        >
          Connect wallet
        </Button>
      )}
    </div>
  )
}
