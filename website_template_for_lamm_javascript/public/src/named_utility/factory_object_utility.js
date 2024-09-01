const { LocalException, EnumGuilty, DefaultStreamWState } = require("library_architecture_mvvm_modify_javascript");
const ExampleWrapperRepository = require("../model_wrapper_repository/example_wrapper_repository/example_wrapper_repository.js");
const DataForExampleVM = require("../named_vm/example_vm/data_for_example_vm.js");
const DataForIndexVM = require("../named_vm/index_vm/data_for_index_vm.js");
const DataForOtherVM = require("../named_vm/other_vm/data_for_other_vm.js");
const DataForNotFoundVM = require("../named_vm/not_found_vm/data_for_not_found_vm.js");

class FactoryObjectUtility {
    constructor() {
        if (new.target === FactoryObjectUtility) {
            throw new LocalException("FactoryObjectUtility",EnumGuilty.developer,"FactoryObjectUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    /* ModelWrapperRepository */
    static get getExampleWrapperRepository() {
        return new ExampleWrapperRepository();
    }

    /* NamedStreamWState */
    static get getNamedStreamWStateWhereDataWExampleVM() {
        return new DefaultStreamWState(new DataForExampleVM(true));
    }

    static get getNamedStreamWStateWhereDataWIndexVM() {
        return new DefaultStreamWState(new DataForIndexVM(true));
    }

    static get getNamedStreamWStateWhereDataWOtherVM() {
        return new DefaultStreamWState(new DataForOtherVM(true));
    }

    static get getNamedStreamWStateWhereDataWNotFoundVM() {
        return new DefaultStreamWState(new DataForNotFoundVM(true));
    }
}

module.exports = FactoryObjectUtility;