const { BaseDataForNamed } = require("library_architecture_mvvm_modify_javascript");
const EnumDataForNotFoundVM = require("./enum_data_for_not_found_vm.js");

class DataForNotFoundVM extends BaseDataForNamed {
    constructor(isLoading) {
        super(isLoading);
    }

    get getEnumDataForNamed() {
        if(this.isLoading) {
            return EnumDataForNotFoundVM.isLoading;
        }
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForNotFoundVM.exception;
        }
        return EnumDataForNotFoundVM.success;
    }

    toString() {
        return "DataForNotFoundVM(isLoading: " + this.isLoading + ", " 
            + "exceptionController: " + this.exceptionController + ")";
    }
}

module.exports = DataForNotFoundVM;