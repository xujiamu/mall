<template>
  <div class="cart-bottom">
    <div class="check">
      <check-button  class="check-button" :is-checked="isSelectAll" @click.native="checkedAll" />
      <span >全选</span>
    </div>
    <div class="total">
      合计:
      <span>{{totalPrice}}</span>
    </div>
    <button class="pay-button" @click="payClick">去结算{{totalCount}}</button>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'

  import {mapState} from 'vuex'


  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapState(['cartList']),

      totalCount() {
        return this.cartList.filter(item => item.checked).length
      },
      totalPrice() {
        let totalProduct = this.cartList.filter(item => item.checked)
        let total = totalProduct.reduce((pre,cur) => {
           return cur.count * cur.realPrice + pre
        },0)
        return '￥'+total
      },
      isSelectAll() {
        if (!this.cartList.length) return false
        if (this.cartList.find(item => !item.checked)) {
          return false
        } else {
          return true
        }
      }
    },
    methods: {
      checkedAll () {
        if (this.isSelectAll) {
          this.cartList.forEach(item => item.checked = false)
        } else {
          this.cartList.forEach(item => item.checked = true)
        }
      },
      payClick () {
        if (!this.cartList.length) {
          this.$toast.show('购物车为空请添加商品')
        }
      }

    }
  }
</script>

<style scoped>
 .cart-bottom {
   height: 40px;
   background: #eee;
   display: flex;
 }
  .check {
    width: 20vw;
    height: 100%;
    display: flex;
    line-height: 40px;
    padding-left: 5px;
    align-items: center;
  }
  .check-button {
    height: 20px;
    line-height: 20px;
  }
  .total {
    width: 50vw;
    line-height: 40px;
  }
  .pay-button {
    width: 30vw;
    height: 100%;
    line-height: 40px;
    border: none;
    outline: none;
    background: var(--color-tint);
    color: #fff;
  }

</style>
