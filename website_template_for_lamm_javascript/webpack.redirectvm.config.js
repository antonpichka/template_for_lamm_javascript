module.exports = {
    mode: "development",
    entry: {
        other_redirect_view: "./public/src/named_utility/named_redirect_vm/other_redirect_vm/other_redirect_view.ts",
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