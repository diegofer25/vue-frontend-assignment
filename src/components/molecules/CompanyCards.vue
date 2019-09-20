<template>
  <div class="company-cards flex row justify-space-between">
    <div class="flex-item grow">
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

export default {
  name: 'CompanyCards',
  components: {
    CompanyActivities,
    SimilarCompanies,
    CompanySpendChart,
    CompanySpendHistory
  }
}
</script>

<style lang="scss" scoped>
.company-cards {
}
</style>
