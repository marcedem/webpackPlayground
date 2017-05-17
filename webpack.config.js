const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                use: 'babel-loader',
                test: /\.js$/
            },
            {
                //use: ['style-loader', 'css-loader'],
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }),
                test: /\.css$/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/, // handle images with extensions like jpg, jpeg, png, gif, svg
                use: [
                    //'url-loader', to be replaced with a url-loader object with options
                    {
                        loader: 'url-loader',
                        options: { limit: 40000 } // this 40000 means includes images smaller than 40kb into our bundle.js output, else save as separate file
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ]

};

module.exports = config;