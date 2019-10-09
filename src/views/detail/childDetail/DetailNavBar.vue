<template>
  <nav-bar class="detail-nav-bar" >
    <template #left>
      <img src="~assets/img/common/back.svg" alt="" @click="backUrl" class="back-img">
    </template>
    <template #center>
      <div  class="title">
        <div v-for="(item,index) in titles"
             class="title-item"
             :class="{activeTitle: currentIndex === index}"
             @click="changeIndex(index)">{{item}}</div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "DetailNavBar",
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      backUrl() {
        this.$router.back()
      },
      changeIndex(index) {
        this.currentIndex = index
        //将currentIndex传递给父组件
        this.$emit('changeIndex',index)
      }
    }
  }
</script>

<style scoped>
  .back-img {
    margin-top: 10px;
  }
  .title {
    display: flex;
    font-size: 14px;
  }
  .title-item {
    flex: 1;
  }
  .activeTitle {
    color: var(--color-high-text)
  }
</style>
