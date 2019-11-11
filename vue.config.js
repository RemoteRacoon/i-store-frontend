const path = require('path');

module.exports = {
    outputDir: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, '../../public/dist') : './dist',
};