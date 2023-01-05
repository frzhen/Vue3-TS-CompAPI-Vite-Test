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
import FailedAuth from "../views/FailedAuth.vue";

// export all routes in a single array
// helps to make tests easier to access routes
export const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/posts/new',
    component: NewPost,
    // beforeEnter: () => {
    //   const usersStore = useUsers();
    //
    //   if (!usersStore.currentUserId) {
    //     return {
    //       path:"/"
    //     }
    //   }
    // },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/posts/:id/edit",
    component: EditPost,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/posts/:id",
    component: ShowPost,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/failedAuth",
    component: FailedAuth,
    meta: {
      requiresAuth: false
    }
  }
];

function isAuthenticated() {
  const usersStore = useUsers();
  return usersStore.currentUserId;

}
export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (isAuthenticated()) {
      next();
    } else {
      next('/failedAuth');
    }
  } else {
    next();
  }
})
