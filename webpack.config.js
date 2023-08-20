'use stricet'

let path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/script.js',
    output: {
        path: path.resolve(__dirname, 'src/js'),
        filename: 'bundle.js',
        
    },
    watch: true,
    devtool: 'source-map',

}