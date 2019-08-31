import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Index from './index.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h(Index),
}).$mount('#app')