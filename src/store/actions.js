import {ADD_COUNT,ADD_TO_CART} from "./mutations-types"

export default {
  addCart({commit,state},payload) {
    return new Promise((resolve,reject) => {
      const oldProduct = state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        commit(ADD_COUNT,oldProduct)
        resolve('购物车商品数量已增加')
      } else {
        commit(ADD_TO_CART,payload)
        resolve('当前商品已添加购物车')
      }
    })
  }
}
