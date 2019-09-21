<template>
  <header class="app-header flex row align-items-center bg-primary">
    <div class="flex-item grow px-xl">
      <img class="logo" :src="$loadImage('logo-pink')" alt="logo">
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
  header.app-header {
    position: fixed;
    top: 0;
    height: 75px;
    width: 100%;
    z-index: 1;
    .logo {
      height: 40px;
    }
  }
</style>
