import { mapActions } from 'vuex'
export default {
  watch:{
    $route ($route) {
      this.setBreadCrumbs($route)
    }
  },
  created () {
    this.setBreadCrumbs(this.$route)
  },
  methods: {
    ...mapActions('layout', ['setBreadCrumbs'])
  }
}
