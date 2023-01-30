const CracoLessPlugin = require('craco-less');
const {resolve}  = require("path")

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      "@": resolve(__dirname, "src"),
      "components": resolve(__dirname, "src/components"),
      "assets": resolve(__dirname, "src/assets") 
    }
  }
};
