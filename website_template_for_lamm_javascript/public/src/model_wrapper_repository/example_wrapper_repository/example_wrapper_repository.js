const { BaseModelWrapperRepository, EnumGuilty, LocalException, Result, ResultWithModelWrapper, ResultWithListModelsWrapper } = require("library_architecture_mvvm_modify_javascript");
const ExampleWrapper = require("../../model/example/example_wrapper/example_wrapper.js");
const ListExampleWrapper = require("../../model/example/example_wrapper/list_example_wrapper.js");

class ExampleWrapperRepository extends BaseModelWrapperRepository {
    constructor() {
        super();
    }

    dispose() {
    }
    
    async getExampleParameterUnknown() {
        throw Error();
    }
}

module.exports = ExampleWrapperRepository;