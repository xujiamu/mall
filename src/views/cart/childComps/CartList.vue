<template>
    <scroll class="cart-list" ref="scroll">
      <cart-list-item
        v-for="(item,index) in cartList"
        :item-info="item"/>
    </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  import CartListItem from './CartListItem'

  import {mapState} from 'vuex'

  export default {
    name: "CartList",
    components: {
      Scroll,
      CartListItem
    },
    computed: {
      ...mapState(['cartList'])
    },
    activated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 132px);
  }
</style>
