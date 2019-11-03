import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'reset-css';

Vue.config.productionTip = false
Vue.config.silent = true

import VueWaypoint from 'vue-waypoint'
Vue.use(VueWaypoint)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
