<template>
  <div class="similar-companies flex column">
    <div class="title flex row pa-md">
      <span v-text="'Similar Companies'"></span>
    </div>
    <div class="flex column px-md pt-md">
      <template v-for="company of similars">
        <div :key="company.name" class="flex row no-wrap mb-sm">
          <img class="mr-sm" :src="$loadImage(company.image)" :alt="company.name">
          <div class="flex-item grow">
            <p class="py-none" v-text="company.name"></p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SimilarCompanies',
  computed: {
    ...mapGetters('app', { similars: 'companySimilars' })
  },
}
</script>

<style lang="scss" scoped>
.similar-companies {
  background-color: $white;
  border: 1px $lightblue solid;
  .title {
    text-transform: uppercase;
    border-bottom: 1px $lightblue solid;
  }
  img {
    width: 60px;
    height: 60px;
  }
}
</style>
