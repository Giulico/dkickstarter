import { configureStore } from '@reduxjs/toolkit'
import walletReducer from './slices/wallet'

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
})

if (typeof window !== 'undefined') {
  window.store = store
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
