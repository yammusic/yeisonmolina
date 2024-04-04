'use client'

import React, { createContext, useEffect, useMemo, useState } from 'react'
import { createTheme, useMediaQuery } from '@mui/material'
import merge from 'deepmerge'

import { ThemeRegistry } from '../Registry'
import { roboto } from './fonts'

import type { ThemeColorMode, ThemeContextType, ThemeProviderProps } from './props-types'

/* Theme context */
export const ThemeContext = createContext<ThemeContextType>({
  toggleColorMode: () => {},
})

/* Theme provider */
export function ThemeProvider({ children, theme: customTheme = {} }: ThemeProviderProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState<ThemeColorMode>(prefersDarkMode ? 'dark' : 'light')

  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light')
  }, [prefersDarkMode])

  const ctx = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    },
  }), [])

  const theme = useMemo(() => createTheme({
    ...merge({
      palette: {
        mode,
      },

      typography: {
        fontFamily: roboto.style.fontFamily,
      },
    }, customTheme),
  }), [mode, customTheme])

  return (
    <ThemeContext.Provider value={ ctx }>
      <ThemeRegistry theme={ theme }>
        { children }
      </ThemeRegistry>
    </ThemeContext.Provider>
  )
}
