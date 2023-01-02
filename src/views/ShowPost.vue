<!--
  * @Author: Fred R. Zhen
  * @Date: 2023/1/2 12:39
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>
import {useRoute} from "vue-router";

const route = useRoute();
const id = route.params.id as string
</script>

<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-two-thirds">

    </div>
    <div class="column"></div>
  </div>
</template>

<style lang='scss' scoped>

</style>
