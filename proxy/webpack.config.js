module.exports = {
    entry: {
     vendor: ['styled-components'],
      app1: './src/app.1.js',
      app2: './src/app.2.js',
      app3: './src/app.2.js',
      app4: './src/app.2.js',

    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: Infinity,
      }),
    ]
  }