const production = process.env.NODE_NEV === 'production'
module.exports = {
  baseUrl: production ? './' : '/',
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 3000,
    https: false,
    hotOnly: false,
    proxy: {
      'api': {
        target: '' // 服务器地址
      }
    }
  }
}