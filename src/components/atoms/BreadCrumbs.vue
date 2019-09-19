<template>
  <ul class="bread-crumbs">
    <li v-for="breadcrumb of breadcrumbs" :key="breadcrumb.link">
      <router-link :to="breadcrumb.link" v-text="breadcrumb.text"/>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  watch:{
    $route ({ matched }){
      this.breadcrumbs = this.setBreadCrumbs(matched)
    }
  },
  data: () => ({
    breadcrumbs: []
  }),
  created () {
    this.breadcrumbs = this.setBreadCrumbs(this.$route.matched)
  },
  methods: {
    setBreadCrumbs (routes) {
      return routes.map(route => ({
        text: route.name,
        link: route.path || '/'
      }))
    }
  },
}
</script>

<style lang="scss" scoped>
.bread-crumbs {
  list-style: none;
  padding: 0;
  li {
    display: inline;
    a {
      color: $grey;
      text-transform: uppercase;
      text-decoration: none;
    }
    &+li:before {
      padding: 8px;
      color: $grey;
      content: "/\00a0";
    }
  }
}
</style>
