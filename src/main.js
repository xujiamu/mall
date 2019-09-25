import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast'
import LazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(toast)

Vue.use(LazyLoad,{
  loading: require('assets/img/common/placeholder.png')
})

//创建一个事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
