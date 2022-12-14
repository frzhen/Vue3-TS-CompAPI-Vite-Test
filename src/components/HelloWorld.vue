<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="is-size-1">{{ msg }}</h1>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title is-size-5 is-centered">
        IDE setup:
      </div>
    </div>
    <div class="card-content">
      <a class="is-size-3 has-text-primary" href="https://www.jetbrains.com/webstorm/" target="_blank">WebStorm</a>
    </div>
    <div class="card-footer">
      <div class="card-footer-item">
        See <code>README.md</code> for more information
      </div>
      <div class="card-footer-item">
        <a class="has-text-link" href="https://vitejs.dev/guide/features.html" target="_blank">
          Vite Docs
        </a>
      </div>
      <div class="card-footer-item">
        <a class="has-text-link" href="https://vitejs.dev/guide/features.html" target="_blank">
          Vite Docs
        </a>
      </div>
    </div>
  </div>
  <div class="box mt-4">
    <button class="button is-primary is-outlined"
            type="button"
            @click="count++">
      count is: {{ count }}
    </button>
  </div>

</template>

<style lang="scss" scoped>
label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
