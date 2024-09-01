const { BaseDataForNamed } = require("library_architecture_mvvm_modify_javascript");
const EnumDataForOtherVM = require("./enum_data_for_other_vm.js");

class DataForOtherVM extends BaseDataForNamed {
    constructor(isLoading) {
        super(isLoading);
    }

    get getEnumDataForNamed() {
        if(this.isLoading) {
            return EnumDataForOtherVM.isLoading;
        }
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForOtherVM.exception;
        }
        return EnumDataForOtherVM.success;
    }

    toString() {
        return "DataForOtherVM(isLoading: " + this.isLoading + ", " 
            + "exceptionController: " + this.exceptionController + ")";
    }
}

module.exports = DataForOtherVM;