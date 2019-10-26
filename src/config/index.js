// config/index.js
module.exports = {
  dev: {
    proxyTable: {
      // proxy all requests starting with /api to 8081
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}