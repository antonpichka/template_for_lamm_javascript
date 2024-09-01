const { LocalException, EnumGuilty } = require("library_architecture_mvvm_modify_javascript");

class KeysExceptionUtility {
    /* Qw */
    static #qwQQGetStringWIsEmptyParameterUsername = "qwQQGetStringWIsEmptyParameterUsername";

    constructor() {
        if (new.target === KeysExceptionUtility) {
            throw new LocalException("KeysExceptionUtility",EnumGuilty.developer,"KeysExceptionUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }


    static get qwQQGetStringWIsEmptyParameterUsername() {
        return this.#qwQQGetStringWIsEmptyParameterUsername;
    }
}

module.exports = KeysExceptionUtility;