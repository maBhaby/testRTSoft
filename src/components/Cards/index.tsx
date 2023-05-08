import { FC } from 'react'
import { Grid } from '@chakra-ui/react'
import { IResult } from '@/Interface'
import Card from './Card'

interface ICards {
  userList: IResult[]
}

const Cards:FC<ICards> = ({userList}) => {
  return (
    <Grid gap='15px' templateColumns='repeat(5, 1fr)'>
      {userList.map((el) => {
        return (
        <Card cardData={el} />
      )})}
    </Grid>
  )
}

export default Cards
