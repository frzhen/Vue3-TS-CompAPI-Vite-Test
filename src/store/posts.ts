/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/15 23:21
 * @Email: fred.zhen@gmail.com
 */
import { defineStore } from 'pinia';
import {today, thisWeek, thisMonth} from "../utils/1time_use";
import {Period, serverUrl} from "../utils/constants";
import {DateTime} from "luxon";
import {Post, TimelinePost} from "../utils/interfaces";

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
      const res = await window.fetch(serverUrl);
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

    createPost(post: TimelinePost) {
      console.log(post);
    }
  },

  getters: {
    filteredPosts: (state: PostsState): TimelinePost[] => {
      return state.ids
        .map( id => {
          const post = state.all.get(id);
          // add type guard to address the possibility that post can be undefined
          if (!post) {
            throw new Error(`Post with id of ${id} was expected but not found.`)
          }
          return {
            ...post,
            created: DateTime.fromISO(post.created)
          }})
        .filter(post => {
          if (state.selectedPeriod === "Today") {
            return post.created >= DateTime.now().minus({day: 1});
          }
          if (state.selectedPeriod === "This Week") {
            return (post.created >= DateTime.now().minus({week: 1}));
          }
          return post
        });
    }
  }
});
