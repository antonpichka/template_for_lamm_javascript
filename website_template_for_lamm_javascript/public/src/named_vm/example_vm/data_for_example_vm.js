const { BaseDataForNamed } = require("library_architecture_mvvm_modify_javascript");
const EnumDataForExampleVM = require("./enum_data_for_example_vm.js");

class DataForExampleVM extends BaseDataForNamed {
    constructor(isLoading) {
        super(isLoading);
    }

    get getEnumDataForNamed() {
        if(this.isLoading) {
            return EnumDataForExampleVM.isLoading;
        }
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForExampleVM.exception;
        }
        return EnumDataForExampleVM.success;
    }

    toString() {
        return "DataForExampleVM(isLoading: " + this.isLoading + ", " 
            + "exceptionController: " + this.exceptionController + ")";
    }
}

module.exports = DataForExampleVM;