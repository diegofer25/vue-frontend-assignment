<template>
  <app-layout class="app flex row wrap justify-center">
    <app-header />
    <div class="container flex column fill-width">
      <div class="flex row">
        <bread-crumbs />
      </div>
      <div class="content flex-item grow">
        <router-view />
      </div>
    </div>
    <app-footer />
  </app-layout>
</template>

<script>
import { BreadCrumbs, AppLayout } from '@/components/atoms'
import { AppHeader, AppFooter } from '@/components/molecules'

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
