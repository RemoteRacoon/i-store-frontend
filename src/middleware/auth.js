/*
    @param {VueStore} store
 */
export default function auth({next, store}) {
    if (!store.getters['auth/token']) {
        return next({name: 'login'});
    }
    return next();
}
