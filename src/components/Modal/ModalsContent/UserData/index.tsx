import { FC } from 'react'
import { IResult } from '@/Interface'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import CardHeader from '@/components/Cards/CardHeader'

interface IUserDataModal {
  closeModal: () => void
  isOpen: boolean
  modalProps: IResult
}

const UserData:FC<IUserDataModal> = ({ closeModal, isOpen, modalProps }) => {
  console.log('res', modalProps);
  
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={closeModal}>
      <DrawerOverlay />
      <DrawerContent maxW='420px'>
        <DrawerCloseButton top='16px' />
        <DrawerHeader borderBottomWidth='1px'>Карточка пользователя</DrawerHeader>
        <DrawerBody p='25px'>
          <CardHeader name={modalProps.name} image={modalProps.picture} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default UserData
