const { BaseModel }  = require("library_architecture_mvvm_modify_javascript");

class Example extends BaseModel {
    constructor(uniqueId) {
        super(uniqueId);
    }

    get getClone() {
        return new Example(this.uniqueId);
    }

    toString() {
        return "Example(uniqueId: " + this.uniqueId + ")";
    }
}

module.exports = Example;