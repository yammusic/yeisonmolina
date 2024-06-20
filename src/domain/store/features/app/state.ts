'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import {
  APP_AUTHOR,
  APP_DESCRIPTION,
  APP_LOCALE,
  APP_NAME,
  APP_VERSION,
} from '@/domain/constants/app'
import type { AppActions, AppState } from './types'

const initialState: AppState = {
  appDescription: APP_DESCRIPTION,
  appName: APP_NAME,
  author: APP_AUTHOR,
  locale: APP_LOCALE,
  version: APP_VERSION,
}

export const useAppStore = create<AppState & AppActions>()(persist((set) => ({
  ...initialState,
  setAppDescription: (appDescription: AppState['appDescription']) => set({ appDescription }),
  setAppName: (appName: AppState['appName']) => set({ appName }),
  setAuthor: (author: AppState['author']) => set({ author }),
  setLocale: (locale: AppState['locale']) => set({ locale }),
  setVersion: (version: AppState['version']) => set({ version }),
}), { name: 'app' }))
