import { IUsersListApi } from "../Interface"

interface IApi {
  getUsers: (page?: number, results?: number) => Promise<IUsersListApi>
}

class Api implements IApi {
  private url: string
  private incDefault = 'picture,name,login,location,phone,email'
  
  constructor (url: string) {
    this.url = url
  }

  public getUsers = async (page = 1, results = 1)  => {
    const res = await fetch(`${this.url}/?inc=${this.incDefault}&results=${results}&page=${page}`)
    return await res.json()
  }
}

export const api = new Api('https://randomuser.me/api')