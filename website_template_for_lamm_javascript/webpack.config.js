module.exports = {
    mode: "development",
    entry: {
      index_view: "./public/src/named_vm/index_vm/index_view.js",
      other_view: "./public/src/named_vm/other_vm/other_view.js"
    },
    output: {
      filename: "[name].js",
      path: __dirname + "/dist/",
    },
};