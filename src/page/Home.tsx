import { FC } from "react"
import Layouts from "@/Layouts"
import { UserListDisplayOption, Filter } from "@/apps"

const Home: FC = () => {
  
  return (
    <Layouts.Default>
      <Filter>
        <UserListDisplayOption/>
      </Filter>
    </Layouts.Default>
  )
}

export default Home