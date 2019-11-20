import axios from '../../axios/axios';

const state = {
    orders: localStorage.getItem('orders') || null,
};

const getters = {
    orders: (state) => {
        let orders = JSON.parse(state.orders);
        return (orders) ? orders.map(item => {
            return {
                id: item.id,
                label: item.product.label,
                rent_rate: item.product.rent_rate,
                state: item.state.state
            }
        }) : null;
    },


};

const mutations = {
    setStorage: (state, data) => {
        data = JSON.stringify(data);
        localStorage.setItem('orders', data);
        state.orders = data;
    },
    updateOrders: (state, updatedItem) => {
        let orders = JSON.parse(state.orders);
        let index = orders.findIndex(item => item.id === updatedItem.id);
        orders.splice(index, 1, updatedItem);
        orders = JSON.stringify(orders);
        state.orders = orders;
        localStorage.setItem('orders', orders);
    }
};

const actions = {
    index: async ({commit}) => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        let promise = new Promise((resolve, reject) => {
            axios.get('/orders')
                .then(resp => {
                    commit('setStorage', resp.data);
                    resolve();
                }).catch(err => {
                reject(err);
            })
        });

        return await promise;
    }
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
