import { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useDisplayType } from '@/hooks/useDisplayType'
import { useUsersStore } from '@/hooks/useUsersList'
import { useStores } from '@/hooks/useStores'
import Cards from '@/components/Cards'
import Table from '@/components/Table'
import { DISPLAY_TYPE } from '@/helpers/const'

const UserListDisplayOption: FC = observer(() => {
  const { SpinnerStore } = useStores()
  const { displayType } = useDisplayType()
  const { userList, handleFetchUser } = useUsersStore()

  if (!SpinnerStore.isShow) {
    return <div>ssss</div>
  }

  useEffect(() => {
    handleFetchUser()
  }, [])

  return displayType === DISPLAY_TYPE.TABLE ? (
    <Table userList={userList} />
  ) : (
    <Cards userList={userList} />
  )
})

export default UserListDisplayOption
