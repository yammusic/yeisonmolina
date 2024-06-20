export interface AppState {
  appBrand: string
  appDescription: string
  appName: string
  author: string
  locale: 'en' | 'es'
  version: string
}

export interface AppActions {
  setAppBrand: (appBrand: AppState['appBrand']) => void
  setAppDescription: (appDescription: AppState['appDescription']) => void
  setAppName: (appName: AppState['appName']) => void
  setAuthor: (author: AppState['author']) => void
  setLocale: (locale: AppState['locale']) => void
  setVersion: (version: AppState['version']) => void
}
