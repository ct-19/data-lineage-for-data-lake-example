import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";


Vue.config.productionTip = false
axios.defaults.baseURL = "https://gva29lkki3.execute-api.us-east-1.amazonaws.com/dev";

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
