import Vue from 'vue'
import Vuex from 'vuex'
import catalog from './catalog.js'
import cart from './cart.js'
import user from './user.js'
import compare from './compare.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    catalog,
    cart,
    user,
    compare,
  }
})