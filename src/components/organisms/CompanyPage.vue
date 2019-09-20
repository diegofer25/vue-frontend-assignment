<template>
  <div class="company-page flex column pa-lg">
    <div class="flex row">
      <company-header />
    </div>
    <div class="flex-item grow">

    </div>
  </div>
</template>

<script>
import { CompanyHeader } from 'Components/molecules'
export default {
  name: 'CompanyPage',
  components: {
    CompanyHeader
  }
}
</script>

<style lang="scss" scoped>
.company-page {
}
</style>
