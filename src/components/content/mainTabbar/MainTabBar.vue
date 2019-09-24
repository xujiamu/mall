<template>
  <TabBar>
    <TabBarItems path="/home" :color="color">
      <template #icon>
        <img src="~assets/img/tabbar/home.svg" alt="">
      </template>
      <template #active-icon>
        <img src="~assets/img/tabbar/home_active.svg" alt="">
      </template>
      <template #firstName>
        <div>首页</div>
      </template>
    </TabBarItems>
    <TabBarItems path="/category" :color="color">
      <template #icon>
        <img src="~assets/img/tabbar/category.svg" alt="">
      </template>
      <template #active-icon>
        <img src="~assets/img/tabbar/category_active.svg" alt="">
      </template>
      <template #firstName>
        <div>分类</div>
      </template>
    </TabBarItems>
    <TabBarItems path="/cart" :color="color">
      <template #icon >
        <img src="~assets/img/tabbar/shopcart.svg" alt="">
      </template>
      <template #active-icon>
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
      </template>
      <template #firstName>
        <div>购物车</div>
      </template>
    </TabBarItems>
    <TabBarItems path="/profile" :color="color">
      <template #icon>
        <img src="~assets/img/tabbar/profile.svg" alt="">
      </template>
      <template #active-icon>
        <img src="~assets/img/tabbar/profile_active.svg" alt="">
      </template>
      <template #firstName>
        <div>我的</div>
      </template>
    </TabBarItems>
  </TabBar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItems from 'components/common/tabbar/TabBarItems'

  export default {
    name: "MainTabBar",
    data(){
      return {
        color: 'red'
      }
    },
    components: {
      TabBar,
      TabBarItems
    }
  }
</script>

<style scoped>

</style>
