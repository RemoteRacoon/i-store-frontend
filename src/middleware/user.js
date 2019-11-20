/*
    @param {VueStore} store
 */
export default function user({next ,store}) {
    if (store.getters['auth/role'] !== 'user') {
        return next({name: 'admin'});
    }
    return next();
}