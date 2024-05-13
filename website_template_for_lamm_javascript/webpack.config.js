module.exports = {
    mode: "development",
    entry: {
      index_vm: "./public/src/named_vm/index_vm/index_vm.ts",
      not_found_vm: "./public/src/named_vm/not_found_vm/not_found_vm.ts",
      other_vm: "./public/src/named_vm/other_vm/other_vm.ts"
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