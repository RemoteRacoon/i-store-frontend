import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/Products';
import auth from './modules/Auth';
import user from './modules/User';
import orders from './modules/Orders';
import admin from './modules/Admin';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        products,
        auth,
        user,
        orders,
        admin,
    }
})

