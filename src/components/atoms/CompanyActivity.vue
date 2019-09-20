<template>
  <div class="company-activity flex row no-wrap pa-md">
    <small class="time" v-text="activity.timestamp" />
    <img class="mx-sm" :src="$loadImage(activity.image)"/>
    <div class="description flex-item grow">
      <p class="my-none" v-text="activity.description"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyActivity',
  props: {
    activity: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.company-activity {
  background-color: $white;
  border-top: 1px $lightblue solid;
  small {
    color: $grey;
    white-space: nowrap;
  }
  img {
    width: 25px !important;
    height: 25px !important;
  }
}
</style>
