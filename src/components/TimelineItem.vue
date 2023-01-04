<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/15 19:55
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>
import { Post } from "../utils/interfaces";
import { DateTime } from "luxon";

defineProps<{
  post: Post
}>();

</script>

<template>
  <RouterLink
    :to="`/posts/${post.id}`"
    class="panel-block is-flex is-flex-direction-column is-align-items-flex-start">
    <a>{{ post.title }}</a>
    <div>{{ DateTime.fromISO(post.created).toFormat("d MMM") }}</div>
  </RouterLink>
</template>

<style lang='scss' scoped>

</style>
