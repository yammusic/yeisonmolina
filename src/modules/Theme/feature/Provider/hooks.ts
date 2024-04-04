'use client'

import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

/* Use context hooks */
export function useThemeContext() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return ctx
}
