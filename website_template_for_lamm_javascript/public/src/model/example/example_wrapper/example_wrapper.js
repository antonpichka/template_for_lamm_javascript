const { BaseModelWrapper }  = require("library_architecture_mvvm_modify_javascript");
const Example = require("../example.js");

class ExampleWrapper extends BaseModelWrapper {
    constructor(listObject) {
        super(listObject);
    }

    createModel() {
        return Example(this.listObject[0]);
    }
}

module.exports = ExampleWrapper;