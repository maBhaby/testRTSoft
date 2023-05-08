import { MouseEvent, useEffect, useState } from 'react'
import { api } from '@/api';
import { IResult, IUsersListApi } from '@/Interface';
import { useStores } from "./useStores";

//!! Перенести обратно в стор!

export const useUsersStore = () => {
  const { ModalStore, SpinnerStore, UsersListStore } = useStores()
  const { userList, findUser, fetchUserList } = UsersListStore

  const handleFindUser = (e:MouseEvent<HTMLTableSectionElement>): IResult | undefined => {
    const target = e.target as HTMLTableSectionElement
    const td = target.closest('td')
      
    if (td?.dataset.uuid) {
      const foundUser = findUser(td?.dataset.uuid)
      ModalStore.open('userData', { ...foundUser })
    }
    return null || undefined
  }

  const handleFetchUser = async () => {
    debugger
    SpinnerStore.hide()
    try {
      fetchUserList()
    } catch (error) {
      
    } finally {
      SpinnerStore.show()
    }
  }

  return {
    userList,
    handleFindUser,
    handleFetchUser
  }
}