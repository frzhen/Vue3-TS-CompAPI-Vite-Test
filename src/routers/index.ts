/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/18 18:56
 * @Email: fred.zhen@gmail.com
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NewPost from "../views/NewPost.vue";
import ShowPost from "../views/ShowPost.vue";
import { useUsers } from "../store/users";
import EditPost from "../views/EditPost.vue";

export const routes = [
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
  },
  {
    path: "/posts/:id/edit",
    component: EditPost,
  },
  {
    path: "/posts/:id",
    component: ShowPost,
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
