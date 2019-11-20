/*
    @param {VueStore} store
 */
export default function guest({next, store}) {
    let role = store.getters['auth/role'];
    if (role) {
        if (role === 'user') {
            return next({name: 'home'});
        }
        return next({name: 'admin'});
    }
    return next();
}