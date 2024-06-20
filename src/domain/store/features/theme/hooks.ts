'use client'

import { bindActionCreators } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '../../shared/hooks'
import {
  setBorderRadius,
  setColorMode,
  setFontFamily,
} from './actions'

import type { RootState } from '../../shared/types'
import type { ThemeState } from './types'

/* Selectors */
export const useThemeState = (): ThemeState => ({
  borderRadius: useSelector(({ theme }: RootState) => theme.borderRadius),
  colorMode: useSelector(({ theme }: RootState) => theme.colorMode),
  fontFamily: useSelector(({ theme }: RootState) => theme.fontFamily),
})

export const useThemeBorderRadius = () => useSelector(({ theme }: RootState) => theme.borderRadius)
export const useThemeColorMode = () => useSelector(({ theme }: RootState) => theme.colorMode)
export const useThemeFontFamily = () => useSelector(({ theme }: RootState) => theme.fontFamily)

/* Actions */
export const useThemeActions = () => ({
  ...bindActionCreators({
    setBorderRadius,
    setColorMode,
    setFontFamily,
  }, useAppDispatch()),
})

export const useThemeSetBorderRadius = () => bindActionCreators({ setBorderRadius }, useAppDispatch()).setBorderRadius
export const useThemeSetColorMode = () => bindActionCreators({ setColorMode }, useAppDispatch()).setColorMode
export const useThemeSetFontFamily = () => bindActionCreators({ setFontFamily }, useAppDispatch()).setFontFamily
