<template>
  <div class="default-layout flex column">
    <header class="flex row bg-primary" />
    <div class="container flex column">
      <div class="flex row">
        <bread-crumbs />
      </div>
      <div class="flex-item grow">
        <router-view />
      </div>
    </div>
    <footer class="flex row bg-lightgrey"/>
  </div>
</template>

<script>
import { BreadCrumbs } from 'Components/atoms'

export default {
  name: 'Default',
  components: {
    BreadCrumbs
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
}
</style>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.default-layout {
  position: relative;
  font-family: 'Roboto', sans-serif;
  header {
    position: fixed;
    top: 0;
    height: 75px;
    width: 100%;
    z-index: 1;
  }
  .container {
    margin-top: 75px;
    min-height: calc(100vh - 225px);
    padding: 0 10vw;
  }
  footer {
    height: 150px;
  }
}
</style>
