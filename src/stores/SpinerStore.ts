import { makeAutoObservable } from "mobx";

export class SpinnerStore {
  isShow: boolean | null = null

  constructor () {
    makeAutoObservable(this)
  }

  show = (): void => {
    this.isShow = true
  }

  hide = (): void => {
    this.isShow = false
  }

  isOpen = (): boolean => Boolean(this.isShow)
}
