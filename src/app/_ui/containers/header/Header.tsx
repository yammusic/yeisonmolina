'use client'

import React from 'react'
import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'

import { useAppBrand } from '@/domain/zustand/features/app'
import { LocaleMenu } from './components/locale-menu'
import styles from './styles.module.scss'

const items = ['About me', 'Experience', 'Projects', 'Skills', 'Contact']

export function Header() {
  const brand = useAppBrand()
  console.info({ brand })

  return (
    <AppBar className={ styles.header } position="fixed">
      <Toolbar className={ styles.nav } component="nav">
        <Typography noWrap variant="h4">
          { brand }
        </Typography>

        <Stack direction="row" spacing={ 2 }>
          { items.map((item) => (
            <Button color="inherit" key={ item }>{ item }</Button>
          ))}

          <LocaleMenu />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
