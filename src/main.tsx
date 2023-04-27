import ReactDOM from 'react-dom/client'
import App from './App'
import { themeApp } from './helpers/const'
import { RootStore } from './stores/Root'
import { StoreProvider } from './context/StoreProvider'
import { ChakraProvider } from '@chakra-ui/react'

const rootStore = new RootStore()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={themeApp}>
    <StoreProvider store={rootStore}>
      <App />
    </StoreProvider>
  </ChakraProvider>,
)
