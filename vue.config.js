let UglifyJsPlugin = require("uglify-js");
let StyleLoader = require('style-loader');
let CssLoader = require('css-loader');
let SassLoader = require('sass-loader');


module.exports = {
    outputDir: process.env.NODE_ENV === 'production' ? '../../public/dist' : './dist',
    css: {
        loaderOptions: {
            css: {

            },

            sass: {

            }

        }

    }

};