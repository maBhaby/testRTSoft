import { makeAutoObservable } from "mobx";
import { RootStore } from "./Root";

export type TDisplay = 'cards' | 'table'

export class DisplayTypeStore {
  public displayType:TDisplay  = 'table'  
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }

  public toggle = ( type: TDisplay ): void => {
    this.displayType = type
    console.log('displayType', this.displayType)
  }
}