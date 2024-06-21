'use client'

import React, { useRef } from 'react'
import { Provider } from 'react-redux'

import { store as appStore } from './config/store'
import type { AppStore } from './shared/types/store'
import type { StoreProviderProps } from './types'

export function StoreProvider(props: Readonly<StoreProviderProps>) {
  const {
    children,
    store = appStore,
  } = props

  const storeRef = useRef<AppStore>()

  if (!storeRef.current) {
    storeRef.current = store
  }

  return (
    <Provider store={ storeRef.current }>
      { children }
    </Provider>
  )
}
