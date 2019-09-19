import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import app from './app'
import layout from './layout'

export default new Vuex.Store({
  modules: {
    app,
    layout
  }
})
