<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/15 09:10
  * @Email: fred.zhen@gmail.com
-->
<script setup lang="ts">
import { ref, Ref, computed } from "vue";
import { today, thisWeek, thisMonth } from "../posts";
import { DateTime } from "luxon";
import TimelineItem from "./TimelineItem.vue";

// Using 'as const' and typeof eliminating repetition in code
const periods = ["Today", "This Week", "This Month"] as const;

type Period = typeof periods[number];

const selectedPeriod: Ref<Period> = ref<Period>("Today");

const selectPeriod = (period: Period) => {
  // console.log(period);
  selectedPeriod.value = period;
}

const posts = computed(() => {
  return [
    today,
    thisWeek,
    thisMonth
  ].map(post => {
      return {
        ...post,
        created: DateTime.fromISO(post.created)
      }})
    .filter(post => {
      if (selectedPeriod.value === "Today") {
        return post.created >= DateTime.now().minus({day: 1});
      }
      if (selectedPeriod.value === "This Week") {
        return (post.created >= DateTime.now().minus({week: 1}));
      }
      return post
    });
});

</script>

<template>
  <nav class="is-primary panel">
<!--    {{ selectedPeriod }}-->
    <span class="panel-tabs">
      <a v-for="period of periods"
         :key="period"
         @click.prevent="selectPeriod(period)"
         :class="{'is-active': period === selectedPeriod}"
         href="">
        {{ period }}
      </a>
    </span>
    <TimelineItem
      v-for="post of posts"
      :key="post"
      :post="post" />
  </nav>
</template>

<style lang='scss' scoped>

</style>
