import Vue from 'vue'
import App from './App.vue'
import YyUI from '../packages/index'

Vue.config.productionTip = false
Vue.use(YyUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
