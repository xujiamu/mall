<template>
  <swiper class="detail-swiper" v-if="topImages.length">
     <template #default>
       <swiper-item v-for="item in topImages">
         <img :src="item" alt="">
       </swiper-item>
     </template>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'

  export default {
    name: "DetailSwiper",
    props: {
      'top-images' : {
        type: Array,
        default() {
          return []
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
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>
