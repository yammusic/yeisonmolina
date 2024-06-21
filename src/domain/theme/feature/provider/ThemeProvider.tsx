'use client'

import React, { useEffect, useMemo } from 'react'
import { useMediaQuery } from '@mui/material'

import { useThemeState, useThemeActions } from '@/domain/store/features/theme'
import { ThemeRegistry } from '../registry'
import { createTheme } from '../../shared/hooks/theme'
import type { ThemeProviderProps } from './types'

import colors from '@/app/styles/theme/iris/_palette.module.scss'
import typography from '@/app/styles/theme/iris/_typography.module.scss'

/* Theme provider */
export function ThemeProvider({ children }: Readonly<ThemeProviderProps>) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const { colorMode, borderRadius, fontFamily } = useThemeState()
  const { setColorMode } = useThemeActions()

  useEffect(() => {
    setColorMode(prefersDarkMode ? 'dark' : 'light')
  }, [prefersDarkMode])

  const theme = useMemo(() => createTheme({
    colors,
    colorMode,
    borderRadius,
    fontFamily,
    typography,
  }), [colorMode, borderRadius, fontFamily])

  return (
    <ThemeRegistry theme={ theme }>
      { children }
    </ThemeRegistry>
  )
}
