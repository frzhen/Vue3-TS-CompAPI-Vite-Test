/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/15 23:21
 * @Email: fred.zhen@gmail.com
 */
import { reactive, readonly } from "vue";

// reactive for complex object, {}, map, set
interface PostsState {
  foo: string
}

export class PostsStore {
  #state: PostsState;

  constructor() {
    this.#state = reactive<PostsState>({
      foo: 'foo'
    })
  }

  // the benefit of using get keyword will make the method accessible like an attribute
  get state() {
    return readonly(this.#state);
  }

  updateFoo( foo: string) {
    this.#state.foo = foo
  }
}

const store = new PostsStore();

export function usePosts () {
  return store;
}
