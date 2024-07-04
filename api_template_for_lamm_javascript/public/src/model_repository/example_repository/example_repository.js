const { BaseModelRepository, EnumGuilty, LocalException, Result } = require("library_architecture_mvvm_modify_javascript");
const Example = require("../../model/example/example.js");
const ListExample = require("../../model/example/list_example.js");

class ExampleRepository extends BaseModelRepository {
    constructor() {
        super();
    }

    _getBaseModelFromMapAndListKeys(map, listKeys) {
        return new Example(
            this.getSafeValueWhereUsedInMethodGetModelFromMapAndListKeysAndIndexAndDefaultValue(map, listKeys, 0, ""));
    }

    _getBaseListModelFromListModel(listModel) {
        return new ListExample(listModel);
    }
    
    async getExampleParameterOne() {
        return this.getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(
            this._getExampleParameterOneWReleaseCallback,
            this._getExampleParameterOneWTestCallback)();
    }

    _getExampleParameterOneWReleaseCallback = async () => {
        throw new LocalException("ExampleRepository",EnumGuilty.developer,"ExampleRepositoryQQGetExampleParameterOneWReleaseCallback");
    };

    _getExampleParameterOneWTestCallback = async () => {
        throw new LocalException("ExampleRepository",EnumGuilty.developer,"ExampleRepositoryQQGetExampleParameterOneWTestCallback");
    };
    
    get _getExampleParameterOneWListKeys() {
        throw new LocalException("ExampleRepository",EnumGuilty.developer,"ExampleRepositoryQQGetExampleParameterOneWListKeys");
    } 
}

module.exports = ExampleRepository;