import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/utils/permission'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

//引入Element
Vue.use(Element)


new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App),
}).$mount('#app')