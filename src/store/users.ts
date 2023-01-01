/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/30 12:25
 * @Email: fred.zhen@gmail.com
 */
import { defineStore } from "pinia";
import { serverUrl } from "../utils/constants";
import { NewUser } from "../utils/users";

const usersUrl = `${serverUrl}/users`;

interface UsersState {
  currentUserId?: string;
}
export const useUsers = defineStore("users", {
  state: (): UsersState => ({
    currentUserId: undefined,
  }),
  actions: {
    async authenticate () {
      const res = await window.fetch("/api/current-user", {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await res.json();
      this.currentUserId = result.id;
    },
    async createUser(newUser: NewUser) {
      const body = JSON.stringify(newUser);
      await  window.fetch(usersUrl, {
        method: "Post",
        headers: {
          "Content-type": "application/json"
        },
        body
      });
      return this.authenticate();
    }
  },

})

