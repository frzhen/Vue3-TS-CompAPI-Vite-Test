<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/15 09:10
  * @Email: fred.zhen@gmail.com
-->
<script setup lang="ts">
import { ref } from "vue";

const periods = ["Today", "This Week", "This Month"];

let selectedPeriod = ref("Today");
const selectPeriod = (period: string) => {
  console.log(period);
  selectedPeriod.value = period;
}
</script>

<template>
  <nav class="is-primary panel">
    {{ selectedPeriod }}
    <span class="panel-tabs">
      <a v-for="period of periods"
         :key="period"
         @click.prevent="selectPeriod(period)"
         href="">
        {{ period }}
      </a>
    </span>
  </nav>
</template>

<style lang='scss' scoped>

</style>
