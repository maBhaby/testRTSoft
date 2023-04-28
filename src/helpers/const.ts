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
  WHITE: '#FFF',
  BLUE: '#2563EB'
}

export const TABLE_HEADER = [
  {
    id: 0,
    label: 'ФИО',
  },
  {
    id: 1,
    label: 'Логин',
  },
  {
    id: 2,
    label: 'Адрес',
  },
  {
    id: 3,
    label: 'Телефон',
  },
  {
    id: 4,
    label: 'E-mail',
  },
]
