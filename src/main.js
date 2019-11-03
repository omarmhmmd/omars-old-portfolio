import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'reset-css';

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false
Vue.config.silent = true

import VueWaypoint from 'vue-waypoint'
Vue.use(VueWaypoint)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

new Vue({
  created () {
   AOS.init()
  },
  router,
  render: h => h(App)
}).$mount('#app')
