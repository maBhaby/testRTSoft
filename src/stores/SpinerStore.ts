import { makeAutoObservable } from "mobx";
import { RootStore } from "./Root";

export class SpinnerStore {
  isShow: boolean 
  rootStore: RootStore

  constructor (rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
    this.isShow = true
  }

  show = (): void => {
    console.log('init');
    
    this.isShow = true
  }

  hide = (): void => {
    this.isShow = false
  }

}
