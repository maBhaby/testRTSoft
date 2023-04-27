/**
 * Import all your stores
 */
//
import { UsersStore } from "./UserList";
import { SpinnerStore } from "./SpinerStore";

/**
* Root Store Class with
*/
export class RootStore {
  UsersStore: UsersStore
  SpinnerStore: SpinnerStore
  
  constructor () {
    this.UsersStore = new UsersStore()
    this.SpinnerStore = new SpinnerStore()
  }
}
