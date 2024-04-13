import React from 'react'
import { Box } from '@mui/material'
import type { Metadata } from 'next'

/* Theme provider */
import { ThemeProvider } from '@/modules/Theme'
import '@/theme/globals.scss'
import { BackgroundModernOne } from '@/modules/UI/feature/Background/variants/modern-one/BackgroundModernOne'
import { Header } from '@/components/header/Header'

/* Define metadata */
export const metadata: Metadata = {
  title: 'NextJS Front App Blank',
  description: 'NextJS Frontend app blank template',
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <BackgroundModernOne>
            <Header />

            <Box component="main">
              { children }
            </Box>
          </BackgroundModernOne>
        </ThemeProvider>
      </body>
    </html>
  )
}
