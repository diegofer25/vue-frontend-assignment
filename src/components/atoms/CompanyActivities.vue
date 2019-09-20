<template>
  <div class="company-activities flex column mr-md">
    <div class="flex row">
      <span class="title pa-md bg-white fill-width" v-text="'Activities'"></span>
    </div>
    <template v-for="(activity, index) of companyActivities">
      <div class="activity flex row no-wrap bg-white pa-md" :key="index">
        <small class="time text-grey" v-text="activity.timestamp" />
        <img class="mx-sm" :src="$loadImage(activity.image)"/>
        <div class="description flex-item grow">
          <p class="my-none" v-text="activity.description"></p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CompanyActivity',
  computed: {
    ...mapGetters('app', ['companyActivities'])
  },
}
</script>

<style lang="scss" scoped>
.company-activities {
  border: 1px $lightblue solid;
  .title {
    text-transform: uppercase;
    white-space: nowrap;
  }
  .activity {
    border-top: 1px $lightblue solid;
    small {
      white-space: nowrap;
    }
    img {
      width: 25px !important;
      height: 25px !important;
    }
  }
}
</style>
