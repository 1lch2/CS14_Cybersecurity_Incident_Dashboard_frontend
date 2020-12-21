import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'

// Import Axios
import api from './utils/api.js'

// Import ElementUI
import './plugins/element.js'
import './theme/index.css'

// Import V-Charts
import VCharts from 'v-charts'

// Import Vuex
import store from './utils/store'

Vue.use(VCharts);

Vue.prototype.$axios = api;

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
