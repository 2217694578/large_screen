import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import scroll from 'vue-seamless-scroll'

Vue.config.productionTip = false

Vue.use(scroll)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
