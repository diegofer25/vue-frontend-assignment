<template>
  <app-layout class="app flex row wrap justify-center">
    <div class="flex-item grow">
      <app-header />
    </div>
    <div class="container flex column">
      <div class="flex row">
        <bread-crumbs />
      </div>
      <div class="content flex-item grow">
        <router-view />
      </div>
    </div>
    <div class="flex-item grow">
      <app-footer />
    </div>
  </app-layout>
</template>

<script>
import { BreadCrumbs, AppLayout } from 'Components/atoms'
import { AppHeader, AppFooter } from 'Components/molecules'

export default {
  name: 'Default',
  components: {
    AppLayout,
    AppHeader,
    AppFooter,
    BreadCrumbs
  }
}
</script>

<style lang="scss" scoped>
.app {
  background-color: $background;
  position: relative;
  .container {
    margin-top: 75px;
    min-height: calc(100vh - 225px);
    max-width: 1200px;
    padding: 0 10vw;
    @media (max-width: 1264px) {
      padding: 0 5vw;
    }
    @media (max-width: 600px) {
      padding: 0 2vw;
    }
  }
}
</style>
