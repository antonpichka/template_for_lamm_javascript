const { LocalException, EnumGuilty } = require("library_architecture_mvvm_modify_javascript");

class AlgorithmsUtility {
    constructor() {
        if (new.target === AlgorithmsUtility) {
            throw new LocalException("AlgorithmsUtility",EnumGuilty.developer,"AlgorithmsUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static getStringWhereReplaceBearerFromAuthorization(authorization) {
        return authorization.replace("Bearer ", "");
    }
}

module.exports = AlgorithmsUtility;