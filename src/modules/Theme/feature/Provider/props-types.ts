import type { PaletteMode, ThemeOptions } from '@mui/material'

export type ThemeColorMode = PaletteMode

export interface ThemeContextType {
  toggleColorMode: () => void
}

export interface ThemeProviderProps {
  theme?: ThemeOptions
  children: React.ReactNode
}
