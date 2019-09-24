import {ADD_COUNT,ADD_TO_CART} from "./mutations-types";

export default {
  [ADD_COUNT] (state,oldProduct) {
    oldProduct.count += 1
  },
  [ADD_TO_CART] (state,payload) {
    payload.checked = true
    payload.count = 1
    state.cartList.push(payload)
  }
}
