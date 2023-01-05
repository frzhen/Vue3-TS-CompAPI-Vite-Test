<!--
  * @Author: Fred R. Zhen
  * @Date: 2023/1/5 17:42
  * @Email: fred.zhen@gmail.com
-->
<script lang="ts" setup>

</script>

<template>
<div class="container">
  <h1 class="title has-text-danger mx-3 mt-6">
    You are not authorized to access the page!
  </h1>
  <div class="box is-justify-content-center">
    <RouterLink to="/" class="button is-primary mb-6">
      <i class="fa-solid fa-house mr-3"></i>
      home
    </RouterLink>
    <img src="/failedAuth.jpg" alt="Authorization Failed">
  </div>

</div>

</template>

<style lang='scss' scoped>
img {
  width: 50%;
  height: 50%;
  margin-top: 200px;
}
</style>
