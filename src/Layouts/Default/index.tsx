import { FC, ReactNode } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Header from '@/components/Header'

interface IDefaultLayot {
  children: ReactNode
}

const Default: FC<IDefaultLayot> = ({ children }) => {
  console.log('resr');
  
  return (
    <Flex flexDirection='column' p='32px' height='100vh' bgColor='gray.200'>
      <Header />
      <Box height='100%' as='main'>{children}</Box>
    </Flex>
  )
}

export default Default
