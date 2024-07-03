const { BaseModelRepository, EnumGuilty, LocalException, Result } = require("library_architecture_mvvm_modify_javascript");
const Example = require("../../model/example/example.js");
const ListExample = require("../../model/example/list_example.js");

class ExampleRepository extends BaseModelRepository {
    constructor() {
        super();
    }

    getBaseModelFromMapAndListKeys(map, listKeys) {
        return new Example(
            this.getSafeValueWhereUsedInMethodGetModelFromMapAndListKeysAndIndexAndDefaultValue(map, listKeys, 0, ""));
    }

    getBaseListModelFromListModel(listModel) {
        return new ListExample(listModel);
    }
    
    async getExampleParameterOne() {
        return this.getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(
            this.getExampleParameterOneWReleaseCallback,
            this.getExampleParameterOneWTestCallback)();
    }

    getExampleParameterOneWReleaseCallback = async () => {
        throw new LocalException("ExampleRepository",EnumGuilty.developer,"ExampleRepositoryQQGetExampleParameterOneWReleaseCallback");
    };

    getExampleParameterOneWTestCallback = async () => {
        throw new LocalException("ExampleRepository",EnumGuilty.developer,"ExampleRepositoryQQGetExampleParameterOneWTestCallback");
    };
    
    get getExampleParameterOneWListKeys(){
        throw new LocalException("ExampleRepository",EnumGuilty.developer,"ExampleRepositoryQQGetExampleParameterOneWListKeys");
    } 
}

module.exports = ExampleRepository;