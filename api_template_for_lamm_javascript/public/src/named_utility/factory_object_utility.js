const { LocalException, EnumGuilty } = require("library_architecture_mvvm_modify_javascript");
const ExampleRepository = require("../model_repository/example_repository/example_repository.js");

class FactoryObjectUtility {
    constructor() {
        if (new.target === FactoryObjectUtility) {
            throw new LocalException("FactoryObjectUtility",EnumGuilty.developer,"FactoryObjectUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    /* ModelRepository */
    static get getExampleRepository() {
        return new ExampleRepository();
    }
}

module.exports = FactoryObjectUtility;