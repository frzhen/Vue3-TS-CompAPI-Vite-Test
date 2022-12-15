<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/15 09:10
  * @Email: fred.zhen@gmail.com
-->
<script setup lang="ts">
import { ref, Ref } from "vue";
import { Post, today, thisWeek, thisMonth } from "../posts";
import {DateTime} from "luxon";

// Using 'as const' and typeof eliminating repetition in code
const periods = ["Today", "This Week", "This Month"] as const;

type Period = typeof periods[number];

const selectedPeriod: Ref<Period> = ref<Period>("Today");

const selectPeriod = (period: Period) => {
  // console.log(period);
  selectedPeriod.value = period;
}

const posts = [
  today,
  thisWeek,
  thisMonth
].map(post => {
  return {
    ...post,
    created: DateTime.fromISO(post.created)
  }
})
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
    <a v-for="post of posts" :key="post.id" class="panel-block">
      <a>{{ post.title }}</a>
      <div>{{ post.created.toFormat("d MMM") }}</div>
    </a>
  </nav>
</template>

<style lang='scss' scoped>

</style>
