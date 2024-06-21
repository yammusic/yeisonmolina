import type { ReactNode } from 'react'
import type { AppStore } from './shared/types/store'

export interface StoreProviderProps {
  children: ReactNode
  store?: AppStore
}
