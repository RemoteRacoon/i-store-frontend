/*
    @param {VueStore} store
 */
export default function admin({next, store}) {
    if (!store.getters['auth/role'] === 'admin') {
        return next({
            name: 'products'
        });
    }

    return next();

}