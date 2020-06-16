const { resolve } = require('path')
module.exports = {
  lintOnSave: 'warning',
  chainWebpack: (config) => {
    config.resolve.alias.set('css', resolve(__dirname, 'src/static/css'))
      .set('public', resolve(__dirname, 'src/public'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
