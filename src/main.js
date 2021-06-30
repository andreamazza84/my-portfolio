import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'roboto-fontface/css/roboto-slab/roboto-slab-fontface.css'
import 'font-awesome/css/font-awesome.css'
import Vuelidate from 'vuelidate'
import VueClipboards from 'vue-clipboards'
Vue.use(VueClipboards)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
