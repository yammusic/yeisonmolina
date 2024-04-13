'use client'

import React from 'react'
import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'

import { LocaleMenu } from './locale-menu'
import styles from './styles.module.scss'

// const brand = '< YM />'
const brand = '{ YM }'
const items = ['About me', 'Experience', 'Projects', 'Skills', 'Contact']

export function Header() {
  return (
    <AppBar className={ styles.header } position="fixed">
      <Toolbar className={ styles.nav } component="nav">
        <Typography noWrap component="div" variant="h6">
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
