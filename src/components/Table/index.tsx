import {
  TableContainer,
  Table as CTable,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
  Image,
  Text
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { useUserStore } from '@/hooks/useUserList'
import { COLORS } from '../../helpers/const'

const Theader = [
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

const Table = observer(() => {
  const { userList, handleClick } = useUserStore()

  return (
    <TableContainer borderRadius='6px'>
      <CTable size='sm'>
        <Thead bg={COLORS.BG_TABLE_HEADER} borderBottom={COLORS.GRAY_300}>
          <Tr>
            {Theader.map(({ id, label }) => (
              <Th key={id}>{label}</Th>
            ))}
          </Tr>
        </Thead>
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
