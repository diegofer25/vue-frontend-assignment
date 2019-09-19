<template>
  <div class="flex row">
    <div>
      <router-link to="/company-data" v-text="'Company Data'"/>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>
