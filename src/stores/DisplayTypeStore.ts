import { makeAutoObservable } from "mobx";

export type TDisplay = 'cards' | 'table'

export class DisplayTypeStore {
  public displayType:TDisplay  = 'table'  

  constructor() {
    makeAutoObservable(this)
  }

  public toggle = ( type: TDisplay ): void => {
    this.displayType = type
    console.log('displayType', this.displayType)
  }
}