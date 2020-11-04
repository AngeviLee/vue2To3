import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 安装引入vue的github上的插件包，为使用vue3.x的语法
import VueCompositionAPI from '@vue/composition-api'

Vue.config.productionTip = false
Vue.use(VueCompositionAPI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
