<template>
<div class="cart">
  <nav-bar class="nav-bar">
    <template #center>
      购物车({{cartListLength}})
    </template>
  </nav-bar>
  <cart-list/>
  <cart-bottom-bar />
</div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'

  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters(['cartListLength'])
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }
  .nav-bar {
   background: var(--color-tint);
   color: white;
 }
</style>
