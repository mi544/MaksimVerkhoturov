const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@S': path.resolve(__dirname, 'components/styled'),
      '@C': path.resolve(__dirname, 'components/'),
      '@A': path.resolve(__dirname, 'components/animations/')
    }
  }
}
