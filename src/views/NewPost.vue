<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/19 09:40
  * @Email: fred.zhen@gmail.com
-->
<script setup lang="ts">
import PostWriter from "../components/PostWriter.vue";
import { TimelinePost } from "../posts";
import { DateTime } from "luxon";

const post: TimelinePost = {
  id: "-1",
  title: "Title",
  created: DateTime.now()
}
</script>

<template>
  <div class="container mx-6 my-3">
    New Post
    <PostWriter :post="post" />
  </div>

</template>

<style lang='scss' scoped>

</style>
