module.exports = {
    mode: "development",
    entry: {
      example_vm: "./public/src/named_vm/example_vm/example_vm.ts",
      login_vm: "./public/src/named_vm/login_vm/login_vm.ts",
      search_vm: "./public/src/named_vm/search_vm/search_vm.ts",
      user_username_vm: "./public/src/named_vm/user_username_vm/user_username_vm.ts",
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