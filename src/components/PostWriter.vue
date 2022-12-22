<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/19 11:26
  * @Email: fred.zhen@gmail.com
-->
<script setup lang="ts">
import { TimelinePost } from "../utils/interfaces";

defineProps<{
  post: TimelinePost,
}>();
</script>

<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <div class="label">
          Post Title
        </div>
        <input type="text" class="input">
      </div>
    </div>
  </div>

</template>

<style lang='scss' scoped>

</style>
