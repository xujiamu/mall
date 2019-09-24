<template>
  <div id="recommend-view">
    <div v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recommendView",
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }

    }
  }
</script>

<style scoped>
 #recommend-view {
   display: flex;
   padding: 10px 0 20px;
   border-bottom: 10px solid #eee;
   font-size: 12px
 }
 #recommend-view>div{
   flex: 1;
   text-align: center
 }
 #recommend-view a {
   display: block;
   width: 100%;
   height: 100%
 }
  #recommend-view a img {
    width: 75px;
    height: 75px;
    margin-bottom: 10px
  }
</style>
