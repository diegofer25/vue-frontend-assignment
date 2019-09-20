<template>
  <div class="company-spend-chart flex column bg-white">
    <div class="title flex row pa-md">
      <span v-text="'Similar Spend History'"></span>
    </div>
    <div class="chart flex-item grow pa-md">
      <img
        :src="$loadImage(history.chart.image, 'svg', true)"
        :alt="history.chart.image"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CompanySpendChart',
  computed: {
    ...mapGetters('app', { history: 'companyHistory' })
  },
}
</script>

<style lang="scss" scoped>
.company-spend-chart {
  border: 1px $lightblue solid;
  .title {
    text-transform: uppercase;
    border-bottom: 1px $lightblue solid;
    white-space: nowrap;
  }
  img {
    width: 100%;
    max-width: 350px;
    max-height: 150px;
  }
}
</style>
