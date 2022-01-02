const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: { port: 8081 },
  plugins: [
    new ModuleFederationPlugin({
      // Name is used to be accessed later on in the container
      name: "products",
      filename: "remoteEntry.js",

      // Set what can we expose in the folder to the host
      exposes: { "./ProductsIndex": "./src/index.js" },
      shared: ["faker"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
