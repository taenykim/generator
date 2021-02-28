const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: [".js", ".ts", ".tsx", ".json"],
  },
  externals: {},
  target: "web",
  plugins: [],
  devtool: "cheap-eval-source-map", // 데브서버가 디버깅 해줌.
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    publicPath: "/",
    host: "localhost",
    overlay: true,
    port: 8080,
    stats: "errors-only",
  },
};
