import { FC } from "react"
import { observer } from "mobx-react-lite"
import { useStores } from "@/hooks/useStores"
import { UserData } from "./ModalsContent"
import { MODALS_TYPE } from "@/helpers/const"

const modals = {
  [MODALS_TYPE.USER_DATA]: UserData,
  [MODALS_TYPE.EMPTY]: null
}

const Modal:FC = observer(() => {
  const { ModalStore } = useStores()

  const closeModal = (): void => {
    ModalStore.close()
  }

  const CurrentModal = modals[ModalStore.currentModal ?? MODALS_TYPE.EMPTY] 

  if (!CurrentModal) {
    return null
  }

  return (
    <CurrentModal 
      isOpen={ModalStore.isOpen} 
      closeModal={closeModal} 
      modalProps={ModalStore.modalProps} />
    )
})

export default Modal