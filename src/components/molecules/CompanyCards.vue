<template>
  <div class="company-cards flex row justify-space-between">
    <div class="activities flex column mr-md">
      <div class="flex row">
        <span class="title pa-md fill-width" v-text="'Activities'"></span>
      </div>
      <template v-for="(activity, index) of companyActivities">
        <company-activity :activity="activity" :key="index" />
      </template>
    </div>
    <div class="flex column">
      <div class="flex-item grow">
        <similar-companies />
      </div>
      <div class="flex-item grow">teste</div>
      <div class="flex-item grow">teste</div>
    </div>
  </div>
</template>

<script>
import { CompanyActivity, SimilarCompanies } from 'Components/atoms'
import { mapGetters } from 'vuex'
export default {
  name: 'CompanyCards',
  components: {
    CompanyActivity,
    SimilarCompanies
  },
  computed: {
    ...mapGetters('app', ['companyActivities'])
  },
}
</script>

<style lang="scss" scoped>
.company-cards {
  .activities {
    border: 1px $lightblue solid;
    .title {
      text-transform: uppercase;
      background-color: $white;
    }
  }
}
</style>
