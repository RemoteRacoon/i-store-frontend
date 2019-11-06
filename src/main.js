import Vue from 'vue'
import Master from './layouts/Master';
Vue.config.productionTip = false;

new Vue({
  render: h => h(Master),
}).$mount('#app');
