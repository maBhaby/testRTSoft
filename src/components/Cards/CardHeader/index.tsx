import { FC } from "react"
import { Flex, Image, Text } from "@chakra-ui/react"
import { IName, IPicture } from "@/Interface"
import { COLORS } from "@/helpers/const"

interface ICardHeader {
  name: IName,
  image: IPicture
}

const CardHeader:FC<ICardHeader> = ({ name, image }) => {
  return (
    <Flex p='15px' alignItems='center' borderRadius='8px' gap='15px' bgColor={COLORS.BG_TABLE_HEADER}>
      <Image borderRadius='full' src={image.large} alt='user photo' width='64px' height='64px' />
      <Text fontSize='19px' lineHeight='20px' >{name.first} {name.last}</Text>
    </Flex>
  )
}

export default CardHeader