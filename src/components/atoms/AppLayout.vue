<template>
  <div class="app-layout">
    <slot />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AppLayout',
  created () {
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    ...mapActions('layout', ['onResize'])
  },
}
</script>

<style lang="scss" scoped>
.app-layout {
  overflow-x: hidden;
  max-width: 100vw;
}
</style>
