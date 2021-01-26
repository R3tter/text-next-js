const { version } = require('./package.json');
const api = require('./config/api');

module.exports = {
  webpack: (config, { dev, webpack }) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.(js|jsx)$/,
            enforce: 'pre',
            exclude: /node_modules/,
            loader: 'eslint-loader'
          }
        ]
      },
      plugins: [
        ...config.plugins,
        new webpack.DefinePlugin({
          DEV: JSON.stringify(dev),
          PROD: JSON.stringify(dev),
          VERSION: JSON.stringify(version),
          REST_API: JSON.stringify(api[process.env.api].rest),
          SOCKET_URL: JSON.stringify(api[process.env.api].socket)
        })
      ]
    };
  }
};
