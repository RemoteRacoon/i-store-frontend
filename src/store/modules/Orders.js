import axios from "../../axios/axios";

const actions = {
    rent: async ({commit}, order_id) => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        let promise = new Promise((resolve, reject) => {
           axios.post('/orders/rent/' + order_id)
               .then(resp => {
                   commit('user/updateOrders', resp.data, {root: true});
                   resolve();
               }).catch(err => {
                   reject(err);
           })
        });
        return await promise;
    },
    reject: async ({commit}, order_id) => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        let promise = new Promise((resolve, reject) => {
            axios.post('/orders/reject/' + order_id)
                .then(resp => {
                    commit('user/updateOrders', resp.data, {root: true});
                    resolve();
                }).catch(err => {
                reject(err);
            })
        });
        return await promise;
    },
};

export default {
    namespaced: true,
    actions
}