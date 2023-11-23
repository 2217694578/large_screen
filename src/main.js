import Vue from 'vue'
import App from './App.vue'

// vuex
import store from './store'
// 路由
import router from './router'
// 自动滚动
import scroll from 'vue-seamless-scroll'
// elementui
import {
  Image
} from 'element-ui'

Vue.config.productionTip = false

Vue.use(scroll)
   .use(Image)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
