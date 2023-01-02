<!--
  * @Author: Fred R. Zhen
  * @Date: 2022/12/19 08:58
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>
import Timeline from "../components/Timeline.vue";

</script>

<template>
  <div class="section">
    <div class="container">
      <Suspense>
        <template #default>
          <Timeline />
        </template>
        <template #fallback>
          <div>
            <label class="is-size-3">Loading...</label>
            <progress class="progress is-primary is-small" />
          </div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<style lang='scss' scoped>

</style>
