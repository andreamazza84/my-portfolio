import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    baseURL: 'https://andreamazza84.github.io/personale/',
    //baseURL: 'http://localhost:8080/personale/'
  },
  mutations: {
    SET_DRAWER(state){
      state.drawer = !state.drawer;
    }
  },
  actions: {
    menuToggle( {commit} ){
      return commit('SET_DRAWER')
    }
  },
  modules: {
  }
})
