import React from 'react'
import { NextIntlClientProvider } from 'next-intl'

import { StoreProvider } from '@/domain/store'
import { ThemeProvider, roboto } from '@/domain/theme'
import type { AppLayoutProps } from './types'

export function AppLayout(props: Readonly<AppLayoutProps>) {
  const { children, locale, messages } = props

  return (
    <html lang={ locale }>
      <head />

      <body suppressHydrationWarning className={ roboto.className }>
        <NextIntlClientProvider locale={ locale } messages={ messages }>
          <StoreProvider>
            <ThemeProvider>
              { children }
            </ThemeProvider>
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
