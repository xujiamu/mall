<template>
  <div class="GoodList" v-if="goods.length">
    <template v-for="item in goods">
    <goods-list-item :item="item"/>
    </template>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    components:{
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .GoodList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
