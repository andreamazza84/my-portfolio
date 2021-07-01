import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    snackbar: false,
    //baseURL: 'https://andreamazza84.github.io/personale/',
    baseURL: 'http://localhost:8080/personale/'
  },
  mutations: {
    SET_DRAWER(state){
      state.drawer = !state.drawer;
    },
    SET_SNACKBAR(state){
      state.snackbar = !state.snackbar;
    }
  },
  actions: {
    menuToggle( {commit} ){
      return commit('SET_DRAWER')
    },
    snackToggle( {commit} ){
      return commit('SET_SNACKBAR')
    }
  },
  modules: {
  }
})
