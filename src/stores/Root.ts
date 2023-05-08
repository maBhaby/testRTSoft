/**
 * Import all your stores
 */
//
import { ModalStore } from "./ModalStore";
import { SpinnerStore } from "./SpinerStore";
import { DisplayTypeStore } from "./DisplayTypeStore";
import { UsersListStore } from "./UsersListStore";

/**
* Root Store Class with
*/
export class RootStore {
  SpinnerStore: SpinnerStore
  DisplayTypeStore: DisplayTypeStore
  ModalStore: ModalStore
  UsersListStore: UsersListStore
  
  constructor () {
    this.SpinnerStore = new SpinnerStore(this)
    this.DisplayTypeStore = new DisplayTypeStore(this)
    this.ModalStore = new ModalStore(this)
    this.UsersListStore = new UsersListStore(this)
  }
}
