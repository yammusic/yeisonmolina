'use client'

import { useAppStore } from './state'
import type { AppActions, AppState } from './types'

// Selectors
export const useAppState = (): AppState => ({
  appBrand: useAppStore((state) => state.appBrand),
  appDescription: useAppStore((state) => state.appDescription),
  appName: useAppStore((state) => state.appName),
  author: useAppStore((state) => state.author),
  locale: useAppStore((state) => state.locale),
  version: useAppStore((state) => state.version),
})

export const useAppBrand = () => useAppStore((state) => state.appBrand)
export const useAppDescription = () => useAppStore((state) => state.appDescription)
export const useAppName = () => useAppStore((state) => state.appName)
export const useAppAuthor = () => useAppStore((state) => state.author)
export const useAppLocale = () => useAppStore((state) => state.locale)
export const useAppVersion = () => useAppStore((state) => state.version)

// Actions
export const useAppActions = (): AppActions => ({
  setAppBrand: useAppStore((state) => state.setAppBrand),
  setAppDescription: useAppStore((state) => state.setAppDescription),
  setAppName: useAppStore((state) => state.setAppName),
  setAuthor: useAppStore((state) => state.setAuthor),
  setLocale: useAppStore((state) => state.setLocale),
  setVersion: useAppStore((state) => state.setVersion),
})

export const useSetBrand = () => useAppStore((state) => state.setAppBrand)
export const useSetDescription = () => useAppStore((state) => state.setAppDescription)
export const useSetAppName = () => useAppStore((state) => state.setAppName)
export const useSetAuthor = () => useAppStore((state) => state.setAuthor)
export const useSetLocale = () => useAppStore((state) => state.setLocale)
export const useSetVersion = () => useAppStore((state) => state.setVersion)
