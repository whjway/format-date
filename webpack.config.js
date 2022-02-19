const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    "formate-date": "./src/index.js",
    "formate-date.min": "./src/index.js",
  },
  output: {
    filename: "[name].js",
    library: "formateDate",
    libraryTarget: "umd",
    libraryExport: "default",
  },
  mode: "none",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
};
