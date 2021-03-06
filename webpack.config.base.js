/* eslint-disable import/no-extraneous-dependencies, no-unused-vars, no-param-reassign */
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
