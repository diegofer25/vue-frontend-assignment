<template>
  <div class="default-layout flex column">
    <app-header />
    <div class="container flex column">
      <div class="flex row">
        <bread-crumbs />
      </div>
      <div class="content flex-item grow">
        <router-view />
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import { BreadCrumbs } from 'Components/atoms'
import { AppHeader, AppFooter } from 'Components/molecules'
export default {
  name: 'Default',
  components: {
    BreadCrumbs,
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
.default-layout {
  position: relative;
  .container {
    margin-top: 75px;
    min-height: calc(100vh - 225px);
    padding: 0 10vw;
    background-color: $skyblue;
  }
}
</style>
