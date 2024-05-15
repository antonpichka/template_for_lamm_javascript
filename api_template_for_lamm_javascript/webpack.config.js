module.exports = {
    mode: "development",
    entry: {
      login_vm: "./public/src/named_vm/login_vm/login_vm.ts",
      search_vm: "./public/src/named_vm/search_vm/search_vm.ts",
      user_vm: "./public/src/named_vm/user_vm/user_vm.ts",
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