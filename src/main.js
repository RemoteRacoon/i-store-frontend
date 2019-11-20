require('./bootstrap');

import Vue from 'vue'
import router from './router/router.js';
import store from './store/store';
import Master from './layouts/Master';
import axios from './axios/axios';

require('./css/app.scss');
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

console.log(Vue.http);

new Vue({
    router,
    store,
    render: h => h(Master),
}).$mount('#app');
