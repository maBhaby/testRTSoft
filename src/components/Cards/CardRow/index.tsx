import { FC } from "react"
import { Box, Text } from "@chakra-ui/react"
import { COLORS } from "@/helpers/const"

interface CardRow {
  title?: string
  text: string
}

const CardRow:FC<CardRow> = ({title, text}) => {
  return (
    <Box>
      {title && <Text color={COLORS.GRAY_500} fontSize='14px' lineHeight='24px' mb='5px' as='h3'>{title}</Text>}
      <Text>{text}</Text>
    </Box>
  )
}

export default CardRow