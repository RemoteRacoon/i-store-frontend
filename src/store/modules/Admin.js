import axios from "../../axios/axios";

const state = {
    users: localStorage.getItem('users') || null,
    userOrders: localStorage.getItem('userOrders') || null,
};


const getters = {
    users: (state) => {
        return JSON.parse(state.users);
    },
    orders: (state) => {
        let orders = JSON.parse(state.userOrders);
        return (orders) ? orders.map(item => {
            return {
                id: item.id,
                label: item.product.label,
                rent_rate: item.product.rent_rate,
                state: item.state.state
            }
        }) : null;
    }

};

const mutations = {
    setUsers: (state, users) => {
        users = JSON.stringify(users);
        state.users = users;
        localStorage.setItem('users', users);
    },

    setUserOrders: (state, userOrders) => {
        userOrders = JSON.stringify(userOrders);
        state.userOrders = userOrders;
        localStorage.setItem('userOrders', userOrders);
    },
    updateUserOrders: (state, order) => {
        let orders = JSON.parse(state.userOrders);
        let index = orders.findIndex(item => item.id === order.id);
        orders.splice(index, 1, order);
        orders = JSON.stringify(orders);
        state.userOrders = orders;
        localStorage.setItem('userOrders', orders);
    }
};

const actions = {
    index: async ({commit}) => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        let promise = new Promise((resolve, reject) => {
            axios.get('/admin/users')
                .then(resp => {
                    commit('setUsers', resp.data);
                    resolve();
                }).catch(err => {
                reject(err);
            })
        });
        return await promise;
    },
    user: async ({commit}, user_id) => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        let promise = new Promise((resolve, reject) => {
            axios.get('/admin/users/' + user_id)
                .then(resp => {
                    commit('setUserOrders', resp.data);
                    resolve();
                }).catch(err => {
                reject(err);
            })
        });
        return await promise;
    },
    confirm: async ({commit}, order_id) => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        let promise = new Promise((resolve, reject) => {
            axios.post('/orders/confirm/' + order_id)
                .then(resp => {
                    commit('updateUserOrders', resp.data);
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