<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/19 09:40
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>
import PostWriter from "../components/PostWriter.vue";
import { TimelinePost } from "../utils/interfaces";
import { DateTime } from "luxon";

const post: TimelinePost = {
  id: "-1",
  title: "Title",
  created: DateTime.now(),
  markdown: '## Title',
  html: '<h2>Title</h2>'
}
</script>

<template>
  <div class="container mx-6 my-3">
    <div class="box">
      <div class="title is-4">
        New Post
      </div>
      <PostWriter :post="post" />
    </div>

  </div>

</template>

<style lang='scss' scoped>

</style>
