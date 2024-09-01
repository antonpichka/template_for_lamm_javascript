module.exports = {
    mode: "development", 
    entry: {
        example_vm: "./public/src/named_vm/example_vm/example_vm.js",
        index_vm: "./public/src/named_vm/index_vm/index_vm.js",
        not_found_vm: "./public/src/named_vm/not_found_vm/not_found_vm.js",
        other_vm: "./public/src/named_vm/other_vm/other_vm.js"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist/",
    },
};