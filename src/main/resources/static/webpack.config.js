module.exports = {
    entry: './app/main.js',
    output: {
        path: './app',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{ test: /\.hbs$/, loader: 'handlebars-loader' }]
    }
};