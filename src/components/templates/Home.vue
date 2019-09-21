<template>
  <div class="home flex row" :class="{ wrap: mdAndDown }">
    <div class="flex column mb-md mr-lg">
      <side-menu />
    </div>
    <div class="flex-item grow mb-md">
      <transition :name="transition">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import { SideMenu } from 'Components/atoms'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    SideMenu
  },
  computed: {
    ...mapGetters('layout', ['mdAndDown']),

    transition () {
      return `fade-${this.direction}`
    }
  },
  data: () => ({
    direction: 'scale'
  }),
  beforeRouteUpdate (to, from, next) {
    if (from.path === '/' || to.path === '/') {
      this.direction = 'scale'
    } else {
      this.direction = to.meta.position < from.meta.position ? 'slide-down' : 'slide-up'
    }
    next()
  }
}
</script>

<style lang="scss" scoped>
@import "Styles/transitions.scss";
.home {
  position: relative;
}
</style>
