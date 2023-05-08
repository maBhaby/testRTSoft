import { FC } from 'react'
import { GridItem } from '@chakra-ui/react'
import CardHeader from '../CardHeader'
import CardRow from '../CardRow'
import { IResult } from '@/Interface'
import { COLORS } from '@/helpers/const'

interface ICard {
  cardData: IResult
}

const card = [
  {
    id: 0,
    title: 'Телефон',
    key: 'phone'
  },
  {
    id: 1,
    title: 'E-mail',
    key: 'email'
  },

]

const Card: FC<ICard> = ({ cardData }) => {

  return (
    <GridItem
      bgColor={COLORS.WHITE}
      border={`1px solid ${COLORS.GRAY_300}`}
      borderRadius='6px'
      display='flex'
      flexDirection='column'
      gap='8px'
      p='15px'
      w='100%'
    >
      <CardHeader 
        name={cardData.name} 
        image={cardData.picture} 
      />
      {card.map(({ id, title, key }) => {
        return (
          <CardRow 
            key={id}
            title={title}
            text={cardData[key]}
          />)
      })}
    </GridItem>
  )
}

export default Card
