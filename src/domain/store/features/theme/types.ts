export interface ThemeState {
  borderRadius: number
  colorMode: 'light' | 'dark'
  fontFamily: string
}

export interface ThemeActions {
  setBorderRadius: (borderRadius: ThemeState['borderRadius']) => void
  setColorMode: (colorMode: ThemeState['colorMode']) => void
  setFontFamily: (fontFamily: ThemeState['fontFamily']) => void
}
