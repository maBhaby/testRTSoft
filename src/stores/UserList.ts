import { IResult, IUsersListApi } from "../Interface";
import { api } from "../api";
import { makeAutoObservable } from "mobx";

export class UsersStore {
  userList: IResult[]

  constructor () {
    makeAutoObservable(this)
    this.fetchUserList()
  }

  private fetchUserList = async () => {
    try {
      const results: IUsersListApi = await api.getUsers()
      this.userList = results.results
    } catch (error) {
      
    }
  }

  public findUser = (uuid: string): IResult | undefined => {
    console.log('first', this.userList.find(({login}) => login.uuid === uuid))
    return this.userList.find(({login}) => login.uuid === uuid)
  }
}
