<template>
  <div class="company-spend-history flex column bg-white">
    <div class="title flex row pa-md">
      <span v-text="'Similar Spend History'"></span>
    </div>
    <div class="history flex-item grow pa-md">
      <template v-for="company of spend.history">
        <div :key="company.name" class="flex row no-wrap mb-sm">
          <img class="mr-sm" :src="$loadImage(company.image)" :alt="company.name">
          <div class="flex-item grow">
            <div class="flex column">
              <p class="mt-xs mb-sm" v-text="company.name"></p>
              <p class="my-none" v-text="company.value"></p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CompanySpendHistory',
  computed: {
    ...mapGetters('app', { spend: 'companySpend' })
  },
}
</script>

<style lang="scss" scoped>
.company-spend-history {
  border: 1px $lightblue solid;
  .title {
    text-transform: uppercase;
    border-bottom: 1px $lightblue solid;
    white-space: nowrap;
  }
  img {
    width: 60px;
    height: 60px;
  }
}
</style>
