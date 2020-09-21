const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserJSPlugin = require("terser-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
  mode: "development", // ['development', 'production']
  entry: {
    index: "./src/index.js",
    "index.min": "./src/index.js",
  }, // Array : N to 1번들, Object : N to N 번들 (key가 청크되는 파일 이름)
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js", // chunk시, [name][hash].js
    libraryTarget: "umd", // ['var', 'this', 'commonjs', 'commonjs2', 'amd', 'umd']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        // use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: [".js"],
  },
  externals: {},
  target: "web", // ['web', 'webworker', 'node', async-node', 'electron']
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  optimization: {
    minimize: true,
    // ~.min.js 파일에 .min.js가 있는 경우에만 난독화를 하도록 설정
    minimizer: [
      new TerserJSPlugin({
        include: /\.min\.js$/,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  // devtool: "cheap-eval-source-map", // 데브서버가 디버깅 해줌.
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    publicPath: "/",
    host: "localhost",
    overlay: true,
    port: 8080,
    stats: "errors-only",
  },
}
