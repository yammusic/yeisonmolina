import React from 'react'
import type { AppLayoutProps } from './types'

import { StoreProvider } from '@/domain/store'
import { ThemeProvider } from '@/domain/theme'

export function AppLayout({ children }: Readonly<AppLayoutProps>) {
  return (
    <StoreProvider>
      <ThemeProvider>
        { children }
      </ThemeProvider>
    </StoreProvider>
  )
}
