<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/15 19:55
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>
import { TimelinePost } from "../utils/interfaces";

defineProps<{
  post: TimelinePost
}>();

</script>

<template>
  <RouterLink
    :to="`/posts/${post.id}`"
    class="panel-block is-flex is-flex-direction-column is-align-items-flex-start">
    <a>{{ post.title }}</a>
    <div>{{ post.created.toFormat("d MMM") }}</div>
  </RouterLink>
</template>

<style lang='scss' scoped>

</style>
