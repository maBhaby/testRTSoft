import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { themeApp } from './helpers/const.ts'
import { ChakraProvider } from '@chakra-ui/react'

console.log('themeApp', themeApp);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={themeApp}>
    <App />
  </ChakraProvider>,
)
