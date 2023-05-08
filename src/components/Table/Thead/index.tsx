import React, { FC } from 'react'
import { Thead as Theader, Tr, Th } from '@chakra-ui/react'

import { COLORS } from '@/helpers/const'

interface IProps {
  headers: {
    id: number,
    label: string 
  }[]
}

const Thead: FC<IProps> = ({headers}) => {
  return (
    <Theader bg={COLORS.BG_TABLE_HEADER} borderBottom={COLORS.GRAY_300}>
      <Tr>
        {headers.map(({ id, label }) => (
          <Th key={id}>{label}</Th>
        ))}
      </Tr>
    </Theader>
  )
}

export default Thead