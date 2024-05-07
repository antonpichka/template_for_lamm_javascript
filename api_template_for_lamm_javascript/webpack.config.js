module.exports = {
    mode: "development",
    entry: {
      login_view: "./public/src/named_vm/login_vm/login_view.ts",
    },
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: { 
      libraryTarget: "commonjs",
      filename: "[name].js",
      path: __dirname + "/dist/",
    },
};