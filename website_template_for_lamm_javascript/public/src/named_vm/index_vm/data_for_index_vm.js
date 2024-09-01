const { BaseDataForNamed } = require("library_architecture_mvvm_modify_javascript");
const EnumDataForIndexVM = require("./enum_data_for_index_vm.js");

class DataForIndexVM extends BaseDataForNamed {
    constructor(isLoading) {
        super(isLoading);
    }

    get getEnumDataForNamed() {
        if(this.isLoading) {
            return EnumDataForIndexVM.isLoading;
        }
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForIndexVM.exception;
        }
        return EnumDataForIndexVM.success;
    }

    toString() {
        return "DataForIndexVM(isLoading: " + this.isLoading + ", " 
            + "exceptionController: " + this.exceptionController + ")";
    }
}

module.exports = DataForIndexVM;