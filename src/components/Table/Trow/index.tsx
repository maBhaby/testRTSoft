import { FC } from 'react'
import { Flex, Tr, Td, Image, Text } from '@chakra-ui/react'
import { IResult } from '@/Interface'
import { COLORS } from '@/helpers/const'
import { observer } from 'mobx-react-lite'

interface IProps {
  userData: IResult
}

const Trow: FC<IProps> = observer(({userData}) => {
  return (
    <Tr _hover={{bg: COLORS.GRAY_50}}>
      <Td data-uuid={userData.login.uuid} cursor='pointer'>
        <Flex gap='8px' alignItems='center'>
          <Image borderRadius='full' src={userData.picture.thumbnail} boxSize='32px' />
          <Text color={COLORS.BLUE}>
            {userData.name.first} {userData.name.last}
          </Text>
        </Flex>
      </Td>
      <Td>{userData.login.username}</Td>
      <Td>
        {userData.location.city}, {userData.location.state}
      </Td>
      <Td>{userData.phone}</Td>
      <Td>{userData.email}</Td>
    </Tr>
  )
})

export default Trow
