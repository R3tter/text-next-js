module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
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
      }
    };
  }
};
