const { LocalException, EnumGuilty } = require("library_architecture_mvvm_modify_javascript");

class KeysHttpServiceUtility {
    /* Qw */
    static qwQQId = "id";

    constructor() {
        if (new.target === KeysHttpServiceUtility) {
            throw new LocalException("KeysHttpServiceUtility",EnumGuilty.developer,"KeysHttpServiceUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }
}

module.exports = KeysHttpServiceUtility;