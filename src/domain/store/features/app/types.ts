export interface NavItem {
  label: string
  path: string
}

export interface AppState {
  appBrand: string
  appDescription: string
  appName: string
  author: string
  locale: 'en' | 'es'
  navItems: NavItem[]
  version: string
}
