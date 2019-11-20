import axios from "../../axios/axios";
import Vue from 'vue';

const state = {
    user: localStorage.getItem('user') || null,
    token: localStorage.getItem('token') || null,
    refresh_token: localStorage.getItem('refresh_token') || null,
    expires_in: localStorage.getItem('expires_in') || null
};

const getters = {
    expiry_time: (state) => {
        return state.expires_in;
    },
    user_id: (state) => {
        if (state.user) {
            let user = JSON.parse(state.user);
            return user.id;
        }
        return null;
    },
    role: (state) => {
        if (state.user) {
            let user = JSON.parse(state.user);
            return user.role;
        }
        return null;
    },
    token: (state) => {
        if (state.token) {
            return state.token;
        }
        return null;
    },
    name: (state) => {
        if (state.user) {
            let user = JSON.parse(state.user);
            return user.name;
        }
    }
};

const mutations = {
    setStorage: (state, data) => {
        let user = JSON.stringify(data.user);
        localStorage.setItem('user', user);
        localStorage.setItem('token', data.token);
        localStorage.setItem('refresh_token', data.refresh_token);
        localStorage.setItem('expires_in', data.expires_in + Date.now());
        state.user = user;
        state.token = data.token;
        state.refresh_token = data.refresh_token;
        state.expires_in = data.expires_in;
    },
    unsetStorage: (state) => {
        localStorage.clear();
        let newState = {};
        Object.keys(state).forEach(key => {
            newState[key] = null;
        });
        Object.assign(state, newState);

    }
};

const actions = {
    login: async ({state, commit, dispatch}, payload) => {
        let promise = new Promise((resolve, reject) => {
            axios.post('/login', {
                username: payload.username,
                password: payload.password,
            }).then(resp => {
                axios.defaults.headers.common['Authorization'] = 'Bearer' + resp.data.token;
                commit('setStorage', resp.data);
                let role = resp.data.user.role;
                if (role === 'user') {
                    dispatch('user/index', null, {root: true})
                        .then(() => {
                            resolve('user');
                        });
                } else {
                    dispatch('admin/index', null, {root: true})
                        .then(() => {
                            resolve('admin');
                        })
                }

            }).catch(err => {
                console.log(err);
                if (err.response.data && err.response.data.errors) {
                    reject(err.response.data.errors);
                }
                reject(err.response.data);
            })
        });

        return await promise;
    },

    logout: async ({state, commit}) => {
        let promise = new Promise((resolve, reject) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
            axios.post('/logout')
                .then(() => {
                    commit('unsetStorage');
                    resolve();
                })
        });

        return await promise;
    },
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
