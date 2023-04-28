import { Box, Text } from '@chakra-ui/react'
import Tab from '../Tab'

const tabsBtn = [
  {
    id: 0,
    label: 'Таблица',
    type: 'table'
  },
  {
    id: 1,
    label: 'Карточка',
    type: 'card'
  },
]

const Header = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='space-between' as='header' mb='15px'>
      <Text color='gray.700' as='h1' fontWeight='500' fontSize='2xl'>
        Список пользователей
      </Text>
      <Tab tabs={tabsBtn} />
    </Box>
  )
}

export default Header
