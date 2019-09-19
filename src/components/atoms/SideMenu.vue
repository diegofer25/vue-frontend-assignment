<template>
  <aside class="side-menu flex column">
    <router-link v-for="item of $options.items" :key="item.text" class="menu-item flex row pa-lg" v-text="item.text" :to="item.link"/>
  </aside>
</template>

<script>
export default {
  name: 'SideMenu',
  items: [{
    text: 'company data',
    link: '/company-data'
  }, {
    text: 'company table',
    link: '/company-table'
  }, {
    text: 'company page',
    link: '/company-page'
  }]
}
</script>

<style lang="scss" scoped>
aside.side-menu {
  border: 1px $grey solid;
  border-radius: 5px;
  a.menu-item {
    min-width: 200px;
    &:not(:last-child) {
      border-bottom: 1px $grey solid;
    }
    text-transform: uppercase;
    color: $black;
    text-decoration: none;
    color: $secondary;
    &.router-link-exact-active {
      border-left: 3px $primary solid;
      color: $black;
    }
  }
}
</style>
