import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleComp from '../components/SingleComp.vue'
import CartComp from '../components/CartComp.vue'
import CompareComp from '../components/CartComp.vue'
import DiscountComp from '../components/DiscountComp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:id',
    name: 'single',
    component: SingleComp
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartComp
  },
  {
    path: '/discount',
    name: 'discount',
    component: DiscountComp
  },
  {
    path: '/compare',
    name: 'compare',
    component: CompareComp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router