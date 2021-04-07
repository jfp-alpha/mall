import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import toast from 'components/common/toast'
import Fastclick from 'fastclick'
import Vuelazyload from 'vue-lazyload'
Vue.use(toast)

//使用图片的懒加载
Vue.use(Vuelazyload)

//解决移动端300ms的延迟
Fastclick.attach(document.body)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
