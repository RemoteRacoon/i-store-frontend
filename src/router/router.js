import Vue from "vue";
import VueRouter from 'vue-router';
import List from "../components/Products/List";
import Home from "../components/User/Home";

import AdminPage from "../components/Admin/AdminPage";
import User from "../components/Admin/User";

import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import Logout from "../components/Auth/Logout";

import NotFound from "../components/Errors/NotFound";

import store from "../store/store";


import middlewarePipeline from "./middlewarePipeline";
import auth from "../middleware/auth";
import user from "../middleware/user";
import guest from "../middleware/guest";
import admin from "../middleware/admin";
import MakeOrder from "../components/Orders/MakeOrder";

Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        name: 'products',
        component: List
    },

    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            middleware: [
                user,
                auth,
            ]
        }
    },

    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            middleware: [
                guest
            ]
        }
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout,
        meta: {
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            middleware: [
                guest
            ]
        }
    },
    {
        path: '/make-order/:product_id',
        name: 'make-order',
        component: MakeOrder,
        meta: {
            middleware: [
                auth,
                user,
            ]
        }
    },
    {
        path: '/admin',
        name: 'admin',
        component: AdminPage,
        meta: {
            middleware: [
                admin,
                auth,
            ]
        }
    },
    {
        path: '/admin/users/:id',
        name: 'user',
        component: User,
        meta: {
            middleware: [
                admin,
                auth,
            ]
        }
    },
    {
        path: "*",
        component: NotFound
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next();
    }

    const middleware = to.meta.middleware;

    const context = {
        to,
        from,
        next,
        store
    };
    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    });
});


export default router;


