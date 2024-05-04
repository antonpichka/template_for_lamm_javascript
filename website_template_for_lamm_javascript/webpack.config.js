module.exports = {
    mode: "development",
    entry: {
      index_view: "./public/src/named_vm/index_vm/index_view.ts",
      not_found_view: "./public/src/named_vm/not_found_vm/not_found_view.ts",
      other_view: "./public/src/named_vm/other_vm/other_view.ts"
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
      filename: "[name].js",
      path: __dirname + "/dist/",
    },
};