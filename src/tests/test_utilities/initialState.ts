/**
 * @Author: Fred R. Zhen
 * @Date: 2023/1/4 20:01
 * @Email: fred.zhen@gmail.com
 */
import {createPinia, Pinia, setActivePinia} from "pinia";
import {createMemoryHistory, createRouter, Router} from "vue-router";
import {beforeEach} from "vitest";
import {routes} from "../../routers";


let pinia: Pinia;
let router: Router;

beforeEach(() => {
  // added pinia and router plugins for the component
  pinia = createPinia();
  setActivePinia(pinia);
  router = createRouter({
    history: createMemoryHistory(),
    routes: routes
  });
});
