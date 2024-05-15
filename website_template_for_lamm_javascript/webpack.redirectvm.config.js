module.exports = {
    mode: "development",
    entry: {
      example_redirect_vm: "./public/src/named_utility/named_redirect_vm/example_redirect_vm/example_redirect_vm.ts",
      other_redirect_vm: "./public/src/named_utility/named_redirect_vm/other_redirect_vm/other_redirect_vm.ts",
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