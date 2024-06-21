'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'

import { type NavItem, useAppState } from '@/domain/store/features/app'
import { useHash } from '@/domain/hooks'
import { LocaleMenu } from './components/locale-menu'

import type { HeaderProps } from './types'
import styles from './styles.module.scss'

export function Header(props: Readonly<HeaderProps>) {
  const { locale } = props
  const { palette } = useTheme()
  const t = useTranslations('nav')
  const { appBrand, navItems } = useAppState()

  return (
    <AppBar className={ styles.header } position="fixed">
      <Toolbar className={ styles.nav } component="nav">
        <Link href="#home">
          <Typography noWrap variant="h3">
            { appBrand }
          </Typography>
        </Link>

        <Stack direction="row" spacing={ 2 }>
          { navItems.map((item: NavItem) => {
            const isActive = item.path === useHash()

            return (
              <Button
                LinkComponent={ Link }
                color="inherit"
                href={ item.path }
                key={ item.path }
                sx={ { color: isActive ? palette.secondary.main : undefined } }
                variant={ isActive ? 'outlined' : 'text' }
              >
                { t(item.label) }
              </Button>
            )
          }) }

          <LocaleMenu locale={ locale } />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
