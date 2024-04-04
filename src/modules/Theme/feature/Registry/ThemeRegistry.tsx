'use client'

import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import { NextAppDirEmotionCacheProvider } from '../Cache'
import type { ThemeRegistryProps } from './props-types'

export function ThemeRegistry({ children, theme }: ThemeRegistryProps) {
  return (
    <NextAppDirEmotionCacheProvider options={ { key: 'mui' } }>
      <ThemeProvider theme={ theme }>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        { children }
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
