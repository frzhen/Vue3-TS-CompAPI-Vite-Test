/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/15 23:21
 * @Email: fred.zhen@gmail.com
 */
import { defineStore } from 'pinia';

// reactive for complex object, {}, map, set
interface PostsState {
  foo: string
}

export const usePosts = defineStore("posts", {
  state: (): PostsState => ({
    foo: 'foo'
  }),

  actions: {
    updateFoo(foo: string) {
      // this.$state.foo is the same as this.foo
      this.foo = foo;
    }
  }
});
