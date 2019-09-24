<template>
  <swiper v-if="banner.length">
    <template #default >
      <swiperItem v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" alt="图片加载中" :title="item.link" @load="imgLoad">
        </a>
      </swiperItem>
    </template>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    data() {
      return {
        isLoad: false
      }
    },
    props: {
      banner: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      imgLoad() {
        if (!this.isLoad) {
          this.$emit('swiperImgLoad')
          this.isLoad = true
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
