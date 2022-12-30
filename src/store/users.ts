/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/30 12:25
 * @Email: fred.zhen@gmail.com
 */
import { defineStore } from "pinia";
import { serverUrl } from "../utils/constants";
import { NewUser } from "../utils/users";

const usersUrl = `${serverUrl}/users`;
export const useUsers = defineStore("users", {
  actions: {
    createUser(newUser: NewUser) {
      const body = JSON.stringify(newUser);
      return  window.fetch(usersUrl, {
        method: "Post",
        headers: {
          "Content-type": "application/json"
        },
        body
      });
    }
  },

})

