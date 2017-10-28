#!/bin/bash

npm i --save-dev babel-core
npm i --save-dev babel-loader babel-preset-react webpack webpack-dev-server
npm i --save react react-dom
npm i --save parity-reactive-ui

echo "All installed."

# Additional stuff for CSS bundling.
#npm i --save-dev style-loader css-loader
# { test: /\.css$/, use: [ { loader: "style-loader", options: { sourceMap: true } }, { loader: "css-loader"} ] },
#import '../style.css';
