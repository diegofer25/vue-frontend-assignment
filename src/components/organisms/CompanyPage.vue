<template>
  <div class="company-page flex column">
    <div class="flex row">
      <company-header />
    </div>
    <div class="flex-item grow">
      <company-cards />
    </div>
  </div>
</template>

<script>
import { CompanyHeader, CompanyCards } from '@/components/molecules'
export default {
  name: 'CompanyPage',
  components: {
    CompanyHeader,
    CompanyCards
  }
}
</script>

<style lang="scss" scoped>
.company-page {
}
</style>
