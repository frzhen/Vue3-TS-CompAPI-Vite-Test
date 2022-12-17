/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/15 23:21
 * @Email: fred.zhen@gmail.com
 */
import { defineStore } from 'pinia';
import {Post, today, thisWeek, thisMonth, TimelinePost} from "../posts";
import {Period} from "../constants";
import {DateTime} from "luxon";

// reactive for complex object, {}, map, set
interface PostsState {
  // using map/set is more efficient than array/list
  ids: string[];
  all: Map<string, Post>;
  selectedPeriod: Period;
}

export const usePosts = defineStore("posts", {
  state: (): PostsState => ({
    ids: [today.id, thisWeek.id, thisMonth.id],
    all: new Map([
      [today.id, today],
      [thisWeek.id, thisWeek],
      [thisMonth.id, thisMonth],
    ]),
    selectedPeriod: "Today"
  }),

  actions: {
    setSelectedPeriod(period: Period) {
      this.selectedPeriod = period;
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
