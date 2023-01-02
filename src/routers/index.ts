/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/18 18:56
 * @Email: fred.zhen@gmail.com
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NewPost from "../views/NewPost.vue";
import { useUsers } from "../store/users";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/posts/new',
      component: NewPost,
      beforeEnter: () => {
        const usersStore = useUsers();

        if (!usersStore.currentUserId) {
          return {
            path:"/"
          }
        }
      }
    }
  ]
})
