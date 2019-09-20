<template>
  <div class="flex row">
    <div class="flex column mr-lg">
      <side-menu />
    </div>
    <div class="flex-item grow">
      <router-view />
    </div>
  </div>
</template>

<script>
import { SideMenu } from 'Components/atoms'

export default {
  name: 'Home',
  components: {
    SideMenu
  }
}
</script>


