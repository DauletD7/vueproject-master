import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@/assets/fonts/stylesheet.css'
import './assets/tailwind.css'

Vue.config.productionTip = false

Vue.use(VueMeta)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')