import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

//* SET ROUTES *//
const routes = [{
  path: '/',
  name: 'home',
  component: Home
}]
//* END SET ROUTES *//

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0}
    }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
