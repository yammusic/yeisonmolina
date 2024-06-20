'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { THEME_BORDER_RADIUS, THEME_COLOR_MODE } from '@/domain/constants/theme'
import { roboto } from '@/domain/theme'

import type { ThemeActions, ThemeState } from './types'

const initialState: ThemeState = {
  borderRadius: THEME_BORDER_RADIUS,
  colorMode: THEME_COLOR_MODE,
  fontFamily: roboto.style.fontFamily,
}

export const useThemeStore = create<ThemeState & ThemeActions>()(persist((set) => ({
  ...initialState,
  setBorderRadius: (borderRadius: ThemeState['borderRadius']) => set({ borderRadius }),
  setColorMode: (colorMode: ThemeState['colorMode']) => set({ colorMode }),
  setFontFamily: (fontFamily: ThemeState['fontFamily']) => set({ fontFamily }),
}), { name: 'theme' }))
