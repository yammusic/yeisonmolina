import { createAction } from '@reduxjs/toolkit'
import type { AppState } from './types'

export const setAppBrand = createAction<AppState['appBrand']>('@app/SET_APP_BRAND')
export const setAppDescription = createAction<AppState['appDescription']>('@app/SET_APP_DESCRIPTION')
export const setAppName = createAction<AppState['appName']>('@app/SET_APP_NAME')
export const setAuthor = createAction<AppState['author']>('@app/SET_AUTHOR')
export const setNavItems = createAction<AppState['navItems']>('@app/SET_NAV_ITEMS')
export const setVersion = createAction<AppState['version']>('@app/SET_VERSION')
