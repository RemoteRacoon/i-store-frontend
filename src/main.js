require('./bootstrap');

import Vue from 'vue'
import router from './router/router.js';
import store from './store/store';
import Master from './layouts/Master';

require('./styles/styles');
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(Master),
}).$mount('#app');
