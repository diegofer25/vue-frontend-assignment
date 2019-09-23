<template>
  <div class="app-modal" :class="{ opened: value }">
    <div
      v-if="value"
      class="flex row justify-center align-items-center fill-height"
    >
      <slot @close-modal="$emit('input', false)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    value: Boolean
  }
}
</script>

<style lang="scss" scoped>
.app-modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  transform: scale(0);
  opacity: 0;
  background-color: rgba($color: $black, $alpha: .5);
  transition: ease 0.5s all;
  &.opened {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
