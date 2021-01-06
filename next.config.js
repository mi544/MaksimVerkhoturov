/* eslint-disable import/no-extraneous-dependencies, no-unused-vars, no-param-reassign */
const path = require('path')

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config

    config.resolve.alias['@S'] = path.resolve(__dirname, 'components/styled/')
    config.resolve.alias['@C'] = path.resolve(__dirname, 'components/')
    config.resolve.alias['@A'] = path.resolve(__dirname, 'components/animations/')

    // alternative version:
    // config.resolve.alias = {
    //   ...config.resolve.alias,
    //   "@S": path.resolve(__dirname, "components/styled"),
    //   "@C": path.resolve(__dirname, "components/"),
    //   "@A": path.resolve(__dirname, 'components/animations/')
    // }

    // Important: return the modified config
    return config
  }
}
