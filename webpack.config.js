const path = require('path');
module.exports = {
    "mode": "none",
    "entry": "./src/index.js",
    "output": {
        "path": __dirname + '/dist',
        "filename": "bundle.js"
    },
    
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 9000
    },
    module: {
        "rules": [
          {
            "test": /\.css$/,
            "use": [
              "style-loader",
              "css-loader"
            ]
          },
          {
            "test": /\.js$/,
            "exclude": /node_modules/,
            "use": ["babel-loader"]
          },
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx'],
      },
}