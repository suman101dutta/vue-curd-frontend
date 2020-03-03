import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from '@/plugins/vuetify';
//import VueFlashMessage from 'vue-flash-message';
import VueSweetalert2 from 'vue-sweetalert2';
const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674'
}
Vue.use(VueSweetalert2, options)
import VueSession from 'vue-session'
Vue.use(VueSession)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  VueSweetalert2,
  VueSession,
  render: h => h(App)
}).$mount('#app')
