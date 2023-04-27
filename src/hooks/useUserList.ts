import { MouseEvent } from 'react'
import { useStores } from "./useStores";

export const useUserStore = () => {
  const { UsersStore } = useStores()
  const { userList, findUser } = UsersStore

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