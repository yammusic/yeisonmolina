'use client'

import { useThemeStore } from './state'
import type { ThemeActions, ThemeState } from './types'

// Selectors
export const useThemeState = (): ThemeState => ({
  borderRadius: useThemeStore((state) => state.borderRadius),
  colorMode: useThemeStore((state) => state.colorMode),
  fontFamily: useThemeStore((state) => state.fontFamily),
})

export const useThemeBorderRadius = () => useThemeStore((state) => state.borderRadius)
export const useThemeColorMode = () => useThemeStore((state) => state.colorMode)
export const useThemeFontFamily = () => useThemeStore((state) => state.fontFamily)

// Actions
export const useThemeActions = (): ThemeActions => ({
  setBorderRadius: useThemeStore((state) => state.setBorderRadius),
  setColorMode: useThemeStore((state) => state.setColorMode),
  setFontFamily: useThemeStore((state) => state.setFontFamily),
})

export const useSetBorderRadius = () => useThemeStore((state) => state.setBorderRadius)
export const useSetColorMode = () => useThemeStore((state) => state.setColorMode)
export const useSetFontFamily = () => useThemeStore((state) => state.setFontFamily)
