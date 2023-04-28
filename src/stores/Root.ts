/**
 * Import all your stores
 */
//
import { UsersListStore } from "./UsersListStore";
import { SpinnerStore } from "./SpinerStore";
import { DisplayTypeStore } from "./DisplayTypeStore";

/**
* Root Store Class with
*/
export class RootStore {
  UsersListStore: UsersListStore
  SpinnerStore: SpinnerStore
  DisplayTypeStore: DisplayTypeStore
  
  constructor () {
    this.UsersListStore = new UsersListStore()
    this.SpinnerStore = new SpinnerStore()
    this.DisplayTypeStore = new DisplayTypeStore()
  }
}
