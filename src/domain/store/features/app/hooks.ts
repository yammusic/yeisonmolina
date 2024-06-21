/* eslint-disable react-hooks/rules-of-hooks */

import { useSelector } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'

import { useAppDispatch } from '../../shared/hooks'
import type { RootState } from '../../shared/types'
import {
  setAppBrand,
  setAppDescription,
  setAppName,
  setAuthor,
  setNavItems,
  setVersion,
} from './actions'

/* Selectors */
export const useAppState = () => ({
  appBrand: useSelector(({ app }: RootState) => app.appBrand),
  appDescription: useSelector(({ app }: RootState) => app.appDescription),
  appName: useSelector(({ app }: RootState) => app.appName),
  author: useSelector(({ app }: RootState) => app.author),
  locale: useSelector(({ app }: RootState) => app.locale),
  navItems: useSelector(({ app }: RootState) => app.navItems),
  version: useSelector(({ app }: RootState) => app.version),
})

export const appBrand = () => useSelector(({ app }: RootState) => app.appBrand)
export const appDescription = () => useSelector(({ app }: RootState) => app.appDescription)
export const appName = () => useSelector(({ app }: RootState) => app.appName)
export const appAuthor = () => useSelector(({ app }: RootState) => app.author)
export const appLocale = () => useSelector(({ app }: RootState) => app.locale)
export const appNavItems = () => useSelector(({ app }: RootState) => app.navItems)
export const appVersion = () => useSelector(({ app }: RootState) => app.version)

/* Actions */
export const useAppActions = () => ({
  ...bindActionCreators({
    setAppBrand,
    setAppDescription,
    setAppName,
    setAuthor,
    setNavItems,
    setVersion,
  }, useAppDispatch())
})

export const useAppBrand = () => bindActionCreators({ setAppBrand }, useAppDispatch()).setAppBrand
export const useAppDescription = () => bindActionCreators({ setAppDescription }, useAppDispatch()).setAppDescription
export const useAppName = () => bindActionCreators({ setAppName }, useAppDispatch()).setAppName
export const useAppAuthor = () => bindActionCreators({ setAuthor }, useAppDispatch()).setAuthor
export const useAppNavItems = () => bindActionCreators({ setNavItems }, useAppDispatch()).setNavItems
export const useAppVersion = () => bindActionCreators({ setVersion }, useAppDispatch()).setVersion
