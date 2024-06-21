import React, { useCallback, useState, useTransition, type MouseEvent } from 'react'
import { useParams } from 'next/navigation'
import { Box, IconButton, Menu, MenuItem } from '@mui/material'

import { EnglishIcon, SpanishIcon } from '@/app/components/common'
import { usePathname, useRouter } from '@/domain/locales/navigation'
import type { LocaleMenuProps } from './types'

export function LocaleMenu(props: Readonly<LocaleMenuProps>) {
  const { locale, onChangeLocale } = props
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, startTransition] = useTransition()

  const onShow = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }, [setAnchorEl])

  const onClose = useCallback(() => {
    setAnchorEl(null)
  }, [setAnchorEl])

  const onChange = useCallback((event: MouseEvent<HTMLElement>) => {
    const locale = event.currentTarget?.getAttribute('value') as 'en' | 'es'

    startTransition(() => {
      router.replace(
        { pathname, params } as any,
        { locale }
      )
    })
    onChangeLocale?.(`${locale}`)
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
      >
        { locale === 'en' && <EnglishIcon /> }

        { locale === 'es' && <SpanishIcon /> }
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
