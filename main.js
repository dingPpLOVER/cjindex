import App from './App'
// 在 main.js 中
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
import { createSSRApp } from 'vue'
// #endif

// #ifdef VUE3

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
