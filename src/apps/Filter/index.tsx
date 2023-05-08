import { FC, ReactNode } from "react"
import Filters from "@/components/Filters"
import { Box } from "@chakra-ui/react"

interface IFilter {
  children: ReactNode
}

const Filter:FC<IFilter> = ({children}) => {
  return (
    <Box h='100%' position='relative' >
      {children}
      <Filters />
    </Box>
  )
}

export default Filter