import React from 'react'
import { Box } from '@mui/material'
import type { Metadata } from 'next'

/* Theme provider */
import { ThemeProvider } from '@/modules/Theme'
import '@/theme/globals.scss'

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
          <Box component="main">
            { children }
          </Box>
        </ThemeProvider>
      </body>
    </html>
  )
}
