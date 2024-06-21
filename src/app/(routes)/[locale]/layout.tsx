import React from 'react'
import { Box } from '@mui/material'
import type { Metadata } from 'next'
import {
  getLocale,
  getMessages,
  unstable_setRequestLocale,
} from 'next-intl/server'
import '@/domain/polyfills'
import '@/app/styles/globals.scss'

import { BackgroundModernOne } from '@/app/components/background'
import { Header } from '@/app/containers/header'
import { AppLayout } from '@/app/layouts'

export const metadata: Metadata = {
  title: 'Yeison Molina - Software Developer',
  description: 'Yeison Molina - Personal website and portfolio',
}

interface Props {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout(props: Readonly<Props>) {
  const { children } = props
  const locale = await getLocale()
  // Enable static rendering
  unstable_setRequestLocale(locale)
  const messages = await getMessages()


  return (
    <AppLayout locale={ locale } messages={ messages }>
      <BackgroundModernOne>
        <Header locale={ locale } />

        <Box component="main">
          { children }
        </Box>
      </BackgroundModernOne>
    </AppLayout>
  )
}
