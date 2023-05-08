import { FC } from 'react'
import {
  TableContainer,
  Table as CTable,
  Tbody,
} from '@chakra-ui/react'
import Thead from './Thead'
import Trow from './Trow'
import { IResult } from '@/Interface'
import { observer } from 'mobx-react-lite'
import { COLORS, TABLE_HEADER } from '../../helpers/const'

interface ITable{
  userList: IResult[]
}

const Table:FC<ITable> = observer(({userList}) => {
  return (
    <TableContainer border={`1px solid ${COLORS.BG}`} height='100%' borderRadius='6px' bgColor={COLORS.WHITE}>
      <CTable size='sm'>
        <Thead headers={TABLE_HEADER} />
        <Tbody>
          {userList?.map((el, i) => {            
            return (
             <Trow key={i} userData={el} />
            )
          })}
        </Tbody>
      </CTable>
    </TableContainer>
  )
})

export default Table
