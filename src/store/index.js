import Vue from 'vue'
import Vuex from 'vuex'
 import user from './modules/users'
import sinteros from './modules/linoleum/sinteros'
import juteks from './modules/linoleum/juteks'
import common from './modules/common'
import navbar from './modules/navbar'
import order from './order'
import sale from './sale'
import kronostar from './modules/laminat/kronostar'
import egger from './modules/laminat/egger'
 

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    sinteros,
    juteks,
    order,
    common,
    navbar,
    sale,
    kronostar,
    egger
  }
})
