import React, { useCallback, useState, type MouseEvent } from 'react'
import { Box, IconButton, Menu, MenuItem } from '@mui/material'

import { EnglishIcon, SpanishIcon } from '@/app/components/common'
import type { LocaleMenuProps, LocaleType } from './props-types'

export function LocaleMenu({ onChangeLocale }: Readonly<LocaleMenuProps>) {
  const [currentLocale, setCurrentLocale] = useState<LocaleType>('en')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const onShow = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }, [setAnchorEl])

  const onClose = useCallback(() => {
    setAnchorEl(null)
  }, [setAnchorEl])

  const onChange = useCallback((event: MouseEvent<HTMLElement>) => {
    const locale = event.currentTarget?.getAttribute('value') as LocaleType
    setCurrentLocale(locale)
    onChangeLocale?.(locale)
    onClose()
  }, [onClose, onChangeLocale])

  return (
    <Box>
      <IconButton
        aria-controls={ open ? 'language-menu' : undefined }
        aria-expanded={ open ? 'true' : undefined }
        aria-haspopup="true"
        aria-label="language"
        onClick={ onShow }
        // size="large"
      >
        { currentLocale === 'en' && <EnglishIcon /> }

        { currentLocale === 'es' && <SpanishIcon /> }
      </IconButton>

      <Menu
        anchorEl={ anchorEl }
        anchorOrigin={ { vertical: 'top', horizontal: 'left' } }
        id="language-menu"
        onClose={ onClose }
        open={ open }
        transformOrigin={ { vertical: 'top', horizontal: 'left' } }
      >
        <MenuItem onClick={ onChange } value="en">
          <EnglishIcon />
        </MenuItem>

        <MenuItem onClick={ onChange } value="es">
          <SpanishIcon />
        </MenuItem>
      </Menu>
    </Box>
  )
}
