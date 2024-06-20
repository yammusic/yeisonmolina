import React from 'react'
import type { AppLayoutProps } from './types'

import { ThemeProvider } from '@/domain/theme'

export function AppLayout({ children }: Readonly<AppLayoutProps>) {
  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}
