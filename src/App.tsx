import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { useDisplayType } from './hooks/useDisplayType'
import Modal from './components/Modal'
import Home from './page/Home'

const App: FC = observer(() => {
  const { displayType } = useDisplayType()
  return (
    <>
      <Modal />
      <Home />
    </>
  )
})

export default App
