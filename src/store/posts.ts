/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/15 23:21
 * @Email: fred.zhen@gmail.com
 */
import { defineStore } from 'pinia';
import {today, thisWeek, thisMonth} from "../utils/1time_use";
import {Period, apiUrl} from "../utils/constants";
import {DateTime} from "luxon";
import {Post} from "../utils/interfaces";

const postsUrl = `${apiUrl}/posts`;
// reactive for complex object, {}, map, set
interface PostsState {
  // using map/set is more efficient than array/list
  ids: string[];
  all: Map<string, Post>;
  selectedPeriod: Period;
}

function delay () {
  return new Promise<void>(res => setTimeout(res, 1500));
}
export const usePosts = defineStore("posts", {
  state: (): PostsState => ({
    ids: [today.id, thisWeek.id, thisMonth.id],
    all: new Map(),
    selectedPeriod: "Today"
  }),

  actions: {
    setSelectedPeriod(period: Period) {
      this.selectedPeriod = period;
    },
    async fetchPosts () {
      const res = await window.fetch(postsUrl);
      const data = (await res.json()) as Post[];
      await delay()

      let ids: string[] = [];
      let all = new Map<string, Post>()
      for (const post of data) {
        ids.push(post.id);
        all.set(post.id, post);
      }

      this.ids = ids;
      this.all = all;
    },

    createPost(post: Post) {
      const body = JSON.stringify(post);
      return  window.fetch(postsUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body
      });
    },
    updatePost(post: Post){
      const body = JSON.stringify(post);
      return  window.fetch(postsUrl, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body
      });
    },
  },
  getters: {
    filteredPosts: (state: PostsState): Post[] => {
      return state.ids
        .map( id => {
          const post = state.all.get(id);
          // add type guard to address the possibility that post can be undefined
          if (!post) {
            throw new Error(`Post with id of ${id} was expected but not found.`)
          }
          return post;
          })
        .filter(post => {
          if (state.selectedPeriod === "Today") {
            return DateTime.fromISO(post.created) >= DateTime.now().minus({day: 1});
          }
          if (state.selectedPeriod === "This Week") {
            return DateTime.fromISO(post.created) >= DateTime.now().minus({week: 1});
          }
          return post;
        });
    }
  }
});
