import { FC } from "react"
import { COLORS } from "../../helpers/const"
import { observer } from "mobx-react-lite"
import { useDisplayType } from "@/hooks/useDisplayType"
import { TDisplay } from "@/stores/DisplayTypeStore"
import { Flex, Button } from "@chakra-ui/react"

interface IProps {
  tabs: Array<{
    id: number
    label: string,
    type: TDisplay
  }>
}

const Tab: FC<IProps> = observer(({tabs}) => {
  const { handleToggle } = useDisplayType()

  return (
    <Flex backgroundColor={COLORS.GRAY_300} p='5px' gap='2px' borderRadius='6px'>
      {
        tabs.map((el) => {
          return (
            <Button
              onClick={() => {handleToggle(el.type)}} 
              minW='100px'
              fontSize='14px'
              padding='0 10px'
              fontWeight='400'
              key={el.id}
            >
              {el.label}
            </Button>
          )
        })
      }
    </Flex>
  )
})

export default Tab