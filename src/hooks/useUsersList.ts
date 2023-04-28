import { MouseEvent } from 'react'
import { useStores } from "./useStores";

export const useUsersStore = () => {
  const { UsersListStore } = useStores()
  const { userList, findUser } = UsersListStore

  const handleClick = (e:MouseEvent<HTMLTableSectionElement>): void => {
    const target = e.target as HTMLTableSectionElement
    const tr = target.closest('tr')

    if (tr?.dataset.uuid) {
      findUser(tr?.dataset.uuid)
    }

  }

  return {
    userList,
    handleClick
  }
}