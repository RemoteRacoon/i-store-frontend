const path = require('path');

module.exports = {
    devServer: {
        overlay: false,
    },
    outputDir: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, '../../public/dist') : './dist',
};