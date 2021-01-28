const { version } = require('./package.json');
const api = require('./config/api');
const { icons } = require('./config/paths');

module.exports = {
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en'
  },
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
          },
          {
            test: /\.(png|svg|jpg)$/,
            exclude: icons,
            use: {
              loader: 'url-loader',
              options: {
                limit: 20000,
                name: 'images/[name].[hash:6].[ext]'
              }
            }
          },
          {
            test: /\.(eot|eot#iefix|ttf|woff|otf)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[hash:6].[ext]'
              }
            }
          },
          {
            test: /\.pdf$/,
            use: {
              loader: 'file-loader',
              options: {
                name: 'pdf/[name].[ext]'
              }
            }
          },
          {
            test: /\.svg$/,
            include: [icons],
            use: ['@svgr/webpack']
          }
        ]
      },
      resolve: {
        ...config.resolve,
        extensions: [...config.resolve.extensions, '.js', '.jsx', '.ts', '.tsx', '.json', 'jpg']
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
