import { FC } from "react"
import { COLORS } from "../../helpers/const"
import { Flex, Button } from "@chakra-ui/react"

interface IProps {
  tabs: Array<{
    id: number
    label: string
  }>
}

const Tab: FC<IProps> = ({tabs}) => {
  return (
    <Flex backgroundColor={COLORS.GRAY_300} p='5px' borderRadius='6px'>
      {
        tabs.map((el) => {
          return (
            <Button 
              maxWidth='100px' 
              w='100%' 
              key={el.id}
            >
              {el.label}
            </Button>
          )
        })
      }
    </Flex>
  )
}

export default Tab