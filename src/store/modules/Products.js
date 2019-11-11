import axios from '../../axios/axios';

const state = {
    products: localStorage.getItem('products') || null,
};

const getters = {
    products: (state) => {
        let products = JSON.parse(state.products);
        return products.map((item) => {
            return {
                "rent_rate": item.rent_rate,
                "label": item.label,
                "id" : item.id,
            }
        })

    }
};

const mutations = {
    setProducts(state, products) {
        products = JSON.stringify(products);
        state.products = products;
        localStorage.setItem('products', products);
    }
};

const actions = {
    index: ({commit, state, getters}) => {
        return new Promise((resolve, reject) => {
            if (state.products) {
                resolve(getters.products);
            } else {
                axios.get('/products')
                    .then(resp => {
                        commit("setProducts", resp.data);
                        resolve(getters.products);
                    }).catch(err => {
                    reject(err);
                })
            }

        })
    }
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}