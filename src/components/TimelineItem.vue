<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/15 19:55
  * @Email: fred.zhen@gmail.com
-->
<script setup lang="ts">
import { TimelinePost } from "../posts";

const props = defineProps<{ post: TimelinePost }>()
</script>

<template>
  <a class="panel-block is-flex is-flex-direction-column is-align-items-flex-start">
    <a>{{ post.title }}</a>
    <div>{{ post.created.toFormat("d MMM") }}</div>
  </a>
</template>

<style lang='scss' scoped>

</style>
