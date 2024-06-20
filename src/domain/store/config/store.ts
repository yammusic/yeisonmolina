import type { ConfigureStoreOptions } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'

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

  // Create persistor
  const persistor = persistStore(store)

  return { store, persistor }
}

export const { store, persistor } = makeStore()
