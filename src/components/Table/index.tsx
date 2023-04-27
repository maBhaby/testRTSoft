import { 
  TableContainer, 
  Table as CTable, 
  Thead, 
  Tr, 
  Th, 
  Tbody, 
  Td
} from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { usersListStore } from '../../store/UserList'
import { COLORS } from '../../helpers/const'

const Theader = [
  {
    id: 0,
    label: 'ФИО'
  },
  {
    id: 1,
    label: 'Логин'
  },
  {
    id: 2,
    label: 'Адрес'
  },
  {
    id: 3,
    label: 'Телефон'
  },
  {
    id: 4,
    label: 'E-mail'
  },
]

const Table = observer(() => {
  return (
    <TableContainer borderRadius='6px'>
      <CTable size='sm'>
        <Thead bg={COLORS.BG_TABLE_HEADER} borderBottom={COLORS.GRAY_300}>
          <Tr>
            {
              Theader.map(({id, label}) => (
                <Th key={id}>{label}</Th>
              ))
            }
          </Tr>
        </Thead>
        <Tbody bg={COLORS.WHITE}>

          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
        </Tbody>
      </CTable>
    </TableContainer>
  )
})

export default Table