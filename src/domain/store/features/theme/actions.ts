import { createAction } from '@reduxjs/toolkit'
import type { ThemeState } from './types'

export const setBorderRadius = createAction<ThemeState['borderRadius']>('@theme/SET_BORDER_RADIUS')
export const setColorMode = createAction<ThemeState['colorMode']>('@theme/SET_COLOR_MODE')
export const setFontFamily = createAction<ThemeState['fontFamily']>('@theme/SET_FONT_FAMILY')
