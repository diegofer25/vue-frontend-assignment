<template>
  <aside class="side-menu flex column">
    <router-link
      v-for="item of $options.items"
      :key="item.text"
      class="menu-item flex row pa-lg"
      v-text="item.text"
      :to="item.link"
    />
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
  border: 1px $lightblue solid;
  border-radius: 5px;
  background-color: $white;
  a.menu-item {
    position: relative;
    min-width: 200px;
    &:not(:last-child) {
      border-bottom: 1px $lightblue solid;
    }
    &:first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    &:last-child {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    text-transform: uppercase;
    color: $black;
    text-decoration: none;
    color: $secondary;
    &.router-link-exact-active {
      background-color: $lightgrey;
      color: $black;
      transition: 350ms ease all;
      &:before {
        height: 100%;
        bottom: 0;
      }
    }
    &:before {
      content: '';
      height: 0;
      width: 3px;
      bottom: 50%;
      left: 0;
      position: absolute;
      background: $primary;
      transition: 350ms ease all;
    }
  }
}
</style>
