import { createSlice } from '@reduxjs/toolkit'

import { THEME_BORDER_RADIUS, THEME_COLOR_MODE } from '@/domain/constants/theme'
import { roboto } from '@/domain/theme'
import {
  setBorderRadius,
  setColorMode,
  setFontFamily,
} from './actions'
import type { ThemeState } from './types'

const initialState: ThemeState = {
  borderRadius: THEME_BORDER_RADIUS,
  colorMode: THEME_COLOR_MODE,
  fontFamily: roboto.style.fontFamily,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(setBorderRadius, (state, { payload }) => ({
      ...state,
      borderRadius: payload,
    }))

    addCase(setColorMode, (state, { payload }) => ({
      ...state,
      colorMode: payload,
    }))

    addCase(setFontFamily, (state, { payload }) => ({
      ...state,
      fontFamily: payload,
    }))
  },
})

export const themeReducer = themeSlice.reducer
