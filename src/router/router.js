import Vue from 'vue';
import VueRouter from 'vue-router';
import List from "../components/Products/List";
// import store from '../store';
// import Home from '../components/Home';
// import AdminPage from "../Admin/AdminPage";
// import Login from '../components/Login';
// import Logout from '../components/Logout';
// import Register from '../components/Register';

Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        name: 'products',
        component: List
    }
    // {
    //     path: '/home',
    //     name: 'home',
    //     component: Home,
    //     meta: {
    //         requiresAuth: true
    //     }
    // },
    // {
    //     path: '/admin',
    //     name: 'admin',
    //     component: AdminPage,
    //     meta: {
    //         requiresAuth: true
    //     }
    // },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: Login,
    //     meta: {
    //         requiresGuest: true
    //     }
    // },
    // {
    //     path: '/logout',
    //     name: 'logout',
    //     component: Logout,
    // },
    // {
    //     path: '/register',
    //     name: 'register',
    //     component: Register,
    //     meta: {
    //         requiresGuest: true
    //     }
    // }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

// router.beforeEach((to, from, next) => {
//     if (store.getters['user/expiry_time'] !== null && store.getters['user/expiry_time'] < Date.now()) {
//         localStorage.clear();
//         next('/');
//     } else {
//         if (to.matched.some(record => record.meta.requiresAuth)) {
//             if (!store.getters['user/user_id']) {
//                 next('/login');
//             } else {
//                 if (to.name === 'admin' && store.getters['user/role'] === 'user') {
//                     next('/home');
//                 } else if ((to.name === 'admin' || to.name === 'home') && store.getters['user/role'] === 'admin') {
//                     next();
//                 } else next()
//             }
//         } else if (to.matched.some(record => record.meta.requiresGuest)) {
//             if (store.getters['user/user_id']
//                 && store.getters['user/token']
//                 && store.getter['user/expiry_time'] > Date.now()) {
//                 next({name: 'home'})
//             } else next();
//         } else {
//             next();
//         }
//     }
//
// });


export default router;


