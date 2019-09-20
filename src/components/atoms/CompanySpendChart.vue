<template>
  <div class="company-spend-chart flex column">
    <div class="title flex row pa-md">
      <span v-text="'Similar Spend History'"></span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'COmpanySpendChart',
  computed: {
    ...mapGetters('app', { similars: 'companySimilars' })
  },
}
</script>

<style lang="scss" scoped>
.company-spend-chart {
  background-color: $white;
  border: 1px $lightblue solid;
  .title {
    text-transform: uppercase;
    border-bottom: 1px $lightblue solid;
  }
  img {
    width: 60px;
    height: 60px;
  }
}
</style>
