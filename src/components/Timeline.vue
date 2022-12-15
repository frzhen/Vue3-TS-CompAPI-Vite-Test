<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/15 09:10
  * @Email: fred.zhen@gmail.com
-->
<script setup lang="ts">
import { ref, Ref } from "vue";

// Using 'as const' and typeof eliminating repetition in code
const periods = ["Today", "This Week", "This Month"] as const;

type Period = typeof periods[number];

const selectedPeriod: Ref<Period> = ref<Period>("Today");

const selectPeriod = (period: Period) => {
  // console.log(period);
  selectedPeriod.value = period;
}
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
  </nav>
</template>

<style lang='scss' scoped>

</style>
