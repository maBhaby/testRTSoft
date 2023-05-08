import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { Flex } from '@chakra-ui/react'
import { COLORS } from '@/helpers/const'

interface IFilters {
  // children: ReactNode
}

const Filters: FC<IFilters> = observer(() => {
  console.log('ref', window.location)

  return (
    <Flex
      minH='56px'
      alignItems='center'
      border={`1px solid ${COLORS.BG}`}
      position='absolute'
      bottom='0'
      w='100%'
      bgColor={COLORS.WHITE}
      p='8px'
      borderRadius='0 0 8px 8px'
    >
      <></>
    </Flex>
  )
})

export default Filters
