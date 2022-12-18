<script setup lang="ts">
import Timeline from "./components/Timeline.vue";
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
            <progress class="progress is-primary is-small" />
            <h1 class="is-size-3 is-primary">
              Loading...
            </h1>
          </div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<style lang="scss">
</style>
