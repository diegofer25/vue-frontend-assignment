<template>
  <div class="company-page flex column pa-lg">
    <div class="flex row">
      <company-header />
    </div>
    <div class="flex-item grow">
      <div class="flex row">
        <div class="flex column"></div>
        <div class="flex column">
          <div class="flex-item grow"></div>
          <div class="flex-item grow"></div>
          <div class="flex-item grow"></div>
        </div>
      </div>
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
