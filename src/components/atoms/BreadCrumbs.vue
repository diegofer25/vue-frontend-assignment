<template>
  <ul class="bread-crumbs">
    <li v-for="breadcrumb of breadcrumbs" :key="breadcrumb.link">
      <router-link class="text-grey" :to="breadcrumb.link" v-text="breadcrumb.text"/>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import { breadcrumbs } from 'Mixins'

export default {
  name: 'BreadCrumbs',
  mixins: [breadcrumbs],
  computed: {
    ...mapState('layout', ['breadcrumbs'])
  }
}
</script>

<style lang="scss" scoped>
.bread-crumbs {
  list-style: none;
  padding: 0;
  li {
    display: inline;
    a {
      text-transform: uppercase;
      text-decoration: none;
      font-size: 13px;
    }
    &+li:before {
      padding: 8px;
      color: $grey;
      content: "/\00a0";
    }
  }
}
</style>
