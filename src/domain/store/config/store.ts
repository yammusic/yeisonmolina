import type { ConfigureStoreOptions } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './reducers'
import { useMiddleware } from './middlewares'

export const makeStore = () => {
  // Get config options
  const [middleware, reducer] = [
    useMiddleware as ConfigureStoreOptions['middleware'],
    rootReducer as ConfigureStoreOptions['reducer'],
  ]

  // Create store
  const store = configureStore({
    // devTools: { trace: true },
    middleware,
    reducer,
  })

  return { store }
}

export const { store } = makeStore()
