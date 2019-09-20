<template>
  <div class="company-page flex column px-lg">
    <div class="flex row">
      <company-header />
    </div>
    <div class="flex-item grow">
      <company-cards />
    </div>
  </div>
</template>

<script>
import { CompanyHeader, CompanyCards } from 'Components/molecules'
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
