import { createSlice } from '@reduxjs/toolkit'

import {
  APP_BRAND,
  APP_DESCRIPTION,
  APP_NAME,
  APP_AUTHOR,
  APP_LOCALE,
  APP_VERSION,
} from '@/domain/constants/app'
import {
  setAppBrand,
  setAppDescription,
  setAppName,
  setAuthor,
  setLocale,
  setNavItems,
  setVersion,
} from './actions'
import type { AppState } from './types'

const initialState: AppState = {
  appBrand: APP_BRAND,
  appDescription: APP_DESCRIPTION,
  appName: APP_NAME,
  author: APP_AUTHOR,
  locale: APP_LOCALE,
  navItems: [
    { label: 'About Me', path: '#about' },
    { label: 'Experience', path: '#experience' },
    { label: 'Projects', path: '#projects' },
    { label: 'Skills', path: '#skills' },
    { label: 'Contact', path: '#contact' },
  ],
  version: APP_VERSION,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(setAppBrand, (state, { payload }) => ({
      ...state,
      appBrand: payload,
    }))

    addCase(setAppDescription, (state, { payload }) => ({
      ...state,
      appDescription: payload,
    }))

    addCase(setAppName, (state, { payload }) => ({
      ...state,
      appName: payload,
    }))

    addCase(setAuthor, (state, { payload }) => ({
      ...state,
      author: payload,
    }))

    addCase(setLocale, (state, { payload }) => ({
      ...state,
      locale: payload,
    }))

    addCase(setNavItems, (state, { payload }) => ({
      ...state,
      navItems: payload,
    }))

    addCase(setVersion, (state, { payload }) => ({
      ...state,
      version: payload,
    }))
  },
})

export const appReducer = appSlice.reducer
