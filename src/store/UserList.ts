import { IResult } from "../Interface";
import { api } from "../api";
import { makeAutoObservable } from "mobx";

class UsersListStore {
  userList: IResult[]

  constructor () {
    makeAutoObservable(this)
    this.fetchUserList()
  }

  private fetchUserList = async () => {
    try {
      this.userList = await api.getUsers()
      console.log('userList', this.userList);
    } catch (error) {
      
    }
  }
}

export const usersListStore = new UsersListStore()