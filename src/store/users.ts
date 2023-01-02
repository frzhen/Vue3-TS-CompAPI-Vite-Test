/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/30 12:25
 * @Email: fred.zhen@gmail.com
 */
import { defineStore } from "pinia";
import { apiUrl } from "../utils/constants";
import { NewUser } from "../utils/users";

interface UsersState {
  currentUserId?: string;
}
export const useUsers = defineStore("users", {
  state: (): UsersState => ({
    currentUserId: undefined,
  }),
  actions: {
    async authenticate () {
      try {
        const res = await window.fetch(`${apiUrl}/current-user`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const result = await res.json();
        this.currentUserId = result.id;
      } catch (e) {
        this.currentUserId = undefined;
      }
    },
    async registerUser(newUser: NewUser) {
      const body = JSON.stringify(newUser);
      await  window.fetch(`${apiUrl}/register-user`, {
        method: "Post",
        headers: {
          "Content-type": "application/json"
        },
        body
      });
      return this.authenticate();
    },
    async logout() {
      await window.fetch(`${apiUrl}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return this.authenticate();
    },
  },

})

