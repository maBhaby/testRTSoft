import { IResult, IUsersListApi } from "../Interface";
import { api } from "../api";
import { RootStore } from "./Root";
import { makeAutoObservable } from "mobx";

export class UsersListStore {
  userList: IResult[]
  rootStore: RootStore

  constructor (rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  public fetchUserList = async () => {
    const results: IUsersListApi = await api.getUsers()
    this.userList = results.results
  }

  public findUser = (uuid: string): IResult | undefined => {
    return this.userList.find(({login}) => login.uuid === uuid)
  }
}
