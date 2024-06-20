import React from 'react'
import { Box } from '@mui/material'
import type { Metadata } from 'next'
import '@/domain/polyfills'
import '@/app/styles/globals.scss'

import { BackgroundModernOne } from '@/app/components/background'
import { Header } from '@/app/containers/header'
import { AppLayout } from '@/app/layouts'

export const metadata: Metadata = {
  title: 'Yeison Molina',
  description: 'Yeison Molina - Personal website and portfolio',
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body>
        <AppLayout>
          <BackgroundModernOne>
            <Header />

            <Box component="main">
              { children }
            </Box>
          </BackgroundModernOne>
        </AppLayout>
      </body>
    </html>
  )
}
