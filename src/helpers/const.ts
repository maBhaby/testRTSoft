import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const themeApp = extendTheme({ config })

export const COLORS = {
  BG: '#E5E7EB',
  GRAY_300: '#D1D5DB',
  BG_TABLE_HEADER: '#F3F4F6',
  WHITE: 'FFF'
}
