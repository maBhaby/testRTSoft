import { useEffect } from 'react'
import { api } from './api'
import { Box } from "@chakra-ui/react"
import { observer } from 'mobx-react-lite'
import Table from './components/Table'
import Header from "./components/Header"

const App = observer(() => {
  useEffect(() => {
    api.getUsers()
      .then((res) => {console.log('res', res)})
  }, [])

  return (
    <Box p='32px' height='100vh' bgColor='gray.200'>
      <Header />
      <Box as="main">
        <Table />
      </Box>
    </Box>
  )
})

export default App