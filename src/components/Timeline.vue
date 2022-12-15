<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/15 09:10
  * @Email: fred.zhen@gmail.com
-->
<script setup lang="ts">
const periods = ["Today", "This Week", "This Month"];

</script>

<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a v-for="period of periods"
        :key="period"
         href="">
        {{ period }}
      </a>
    </span>
  </nav>
</template>

<style lang='scss' scoped>

</style>
