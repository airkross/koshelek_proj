import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import doubleFilter from './filters/double'
Vue.config.productionTip = false
Vue.filter('double', doubleFilter);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
