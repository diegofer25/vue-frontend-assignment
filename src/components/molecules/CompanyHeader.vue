<template>
  <div class="company-header flex column">
    <div class="flex row">
      <img class="company-logo mr-md" :src="$loadImage(company.imageLogo)" :alt="company.name">
      <div class="flex grow">
        <div class="flex column">
          <h1 class="company-name ma-none mt-xs fill-height" v-text="company.name"></h1>
          <div class="company-location flex row">
            <img class="mr-sm" :src="$loadImage('location')" :alt="company.location">
            <small v-text="company.location"></small>
          </div>
        </div>
      </div>
    </div>
    <div class="company-description mt-md">
      <p :class="{ ['view-less']: !viewMore }" v-text="company.description"></p>
      <a class="view-more" v-if="!viewMore" href="javascript:void(0)" @click.stop="viewMore = true">View More</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CompanyHeader',
  computed: {
    ...mapGetters('app', { company: 'selectedCompany' })
  },
  data: () => ({
    viewMore: false
  })
}
</script>

<style lang="scss" scoped>
.company-header {
  .company-logo {
    border-radius: 10px;
    max-width: 40px;
    padding: 20px;
    background: $white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
  .company-name {
    font-weight: 100;
  }
  .company-location {
    img {
      max-height: 15px;
    }
    small {
      color: $grey;
    }
  }
  .company-description {
    position: relative;
    a.view-more {
      position: absolute;
      right: 0;
      top: 32px;
      background-image: linear-gradient(to right, $transparent, $background, $background, $background, $background);
      padding-left: 30px;
    }
    .view-less {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-height: 16px;
      max-height: 32px;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
