<template>
  <div class="company-cards flex row justify-space-between" :class="{ wrap: isMobile }">
    <div class="flex-item grow" :class="{ ['mr-md']: !isMobile }">
      <company-activities />
    </div>
    <div class="flex-item grow">
      <div class="flex column">
        <div class="flex row mb-md">
          <div class="flex-item grow">
            <similar-companies />
          </div>
        </div>
        <div class="flex row mb-md">
          <div class="flex-item grow">
            <company-spend-chart />
          </div>
        </div>
        <div class="flex row">
          <div class="flex-item grow">
            <company-spend-history />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  CompanyActivities,
  SimilarCompanies,
  CompanySpendChart,
  CompanySpendHistory
} from 'Components/atoms'
import { mapGetters } from 'vuex'

export default {
  name: 'CompanyCards',
  components: {
    CompanyActivities,
    SimilarCompanies,
    CompanySpendChart,
    CompanySpendHistory
  },
  computed: {
    ...mapGetters('layout', ['isMobile'])
  }
}
</script>

<style lang="scss" scoped>
.company-cards {
}
</style>
