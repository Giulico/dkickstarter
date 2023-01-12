import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { checkNetwork, switchNetwork, getBalance } from 'utils/wallet'

export interface WalletState {
  account: string | null
  balance: string | null
  isConnecting: boolean
  errorMessage: string | null
}

const initialState: WalletState = {
  account: null,
  balance: null,
  isConnecting: true,
  errorMessage: null,
}

export const checkConnection = createAsyncThunk(
  'wallet/checkConnection',
  async () => {
    // Chain check
    const isRightChain = await checkNetwork()
    if (!isRightChain) {
      await switchNetwork()
    }

    // Account check
    const accounts = await window.ethereum.request({
      method: 'eth_accounts',
    })

    // Used disconnected
    if (accounts.length === 0) {
      return {
        account: null,
        balance: null,
      }
    }

    const balance = await getBalance(accounts)

    return { account: accounts[0], balance }
  }
)

export const connection = createAsyncThunk('wallet/connection', async () => {
  // Chain check
  const isRightChain = await checkNetwork()
  if (!isRightChain) {
    await switchNetwork()
  }

  // Request connection
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  })

  const balance = await getBalance(accounts)

  return { account: accounts[0], balance }
})

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    reset: (state) => ({
      ...state,
      account: initialState.account,
      balance: initialState.balance,
      errorMessage: initialState.errorMessage,
    }),
    setAccount: (state, action: PayloadAction<WalletState['account']>) => ({
      ...state,
      account: action.payload,
    }),
    setBalance: (state, action: PayloadAction<WalletState['balance']>) => ({
      ...state,
      balance: action.payload,
    }),
    setIsConnecting: (
      state,
      action: PayloadAction<WalletState['isConnecting']>
    ) => ({
      ...state,
      isConnecting: action.payload,
    }),
    setErrorMessage: (
      state,
      action: PayloadAction<WalletState['errorMessage']>
    ) => ({
      ...state,
      errorMessage: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(checkConnection.pending, (state, action) => {
      state.isConnecting = true
    })
    builder.addCase(checkConnection.fulfilled, (state, action) => {
      state.account = action.payload.account
      state.balance = action.payload.balance
      state.isConnecting = false
    })
    builder.addCase(checkConnection.rejected, (state, action) => {
      state.errorMessage = "You don't seem connected..."
      state.isConnecting = false
    })
    builder.addCase(connection.pending, (state, action) => {
      state.isConnecting = true
    })
    builder.addCase(connection.fulfilled, (state, action) => {
      state.account = action.payload.account
      state.balance = action.payload.balance
      state.isConnecting = false
    })
    builder.addCase(connection.rejected, (state, action) => {
      state.errorMessage = 'There was a problem related with Metamask'
      state.isConnecting = false
    })
  },
})

export const { setAccount, setBalance, setErrorMessage, reset } =
  walletSlice.actions

export default walletSlice.reducer
