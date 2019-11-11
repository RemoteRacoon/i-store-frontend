let axios = require('axios');

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers : {
        'X-Requested-With' : 'XMLHttpRequest'
    }
});

export default instance;

