import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    snackbar: false,
    switch: false,
  },
  mutations: {
    SET_DRAWER(state){
      state.drawer = !state.drawer;
    },
    SET_SNACKBAR(state){
      state.snackbar = !state.snackbar;
    },
    SET_SWITCH(state){
      state.switch = !state.switch;
    }
  },
  actions: {
    menuToggle( {commit} ){
      return commit('SET_DRAWER')
    },
    snackToggle( {commit} ){
      return commit('SET_SNACKBAR')
    },
    switchToggle( {commit} ){
      return commit('SET_SWITCH')
    }
  },
  modules: {
  }
})
