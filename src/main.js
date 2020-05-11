import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vant 组件库
import Vant from 'vant'

// Vant 组件库样式
import 'vant/lib/index.css'

// 全局样式
import './style/index.less'

// 自动设置 rem 基准值
import 'amfe-flexible'

// 全局注册 Vant 组件
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
