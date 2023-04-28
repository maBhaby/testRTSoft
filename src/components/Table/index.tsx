import {
  TableContainer,
  Table as CTable,
  Tr,
  Tbody,
  Td,
  Flex,
  Image,
  Text
} from '@chakra-ui/react'
import Thead from './Thead'
import { observer } from 'mobx-react-lite'
import { useUsersStore } from '@/hooks/useUsersList'
import { COLORS, TABLE_HEADER } from '../../helpers/const'

const Table = observer(() => {
  const { userList, handleClick } = useUsersStore()

  return (
    <TableContainer borderRadius='6px'>
      <CTable size='sm'>
        <Thead headers={TABLE_HEADER} />
        <Tbody onClick={handleClick} bgColor={COLORS.WHITE}>
          {userList?.map((el, i) => {
            return (
              <Tr data-uuid={el.login.uuid} cursor='pointer' key={i}>
                <Td>
                  <Flex gap='8px' alignItems='center' >
                    <Image borderRadius='full' src={el.picture.thumbnail} boxSize='32px' />
                    <Text color={COLORS.BLUE}>{el.name.first} {el.name.last}</Text>
                  </Flex>
                </Td>
                <Td>{el.login.username}</Td>
                <Td>{el.location.city}, {el.location.state}</Td>
                <Td>{el.phone}</Td>
                <Td>{el.email}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </CTable>
    </TableContainer>
  )
})

export default Table
