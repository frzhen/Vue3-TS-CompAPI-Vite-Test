/**
 * @Author: Fred R. Zhen
 * @Date: 2022/12/15 23:21
 * @Email: fred.zhen@gmail.com
 */
import { defineStore } from 'pinia';
import { Post, today, thisWeek, thisMonth } from "../posts";
import {Period} from "../constants";

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
  }
});
