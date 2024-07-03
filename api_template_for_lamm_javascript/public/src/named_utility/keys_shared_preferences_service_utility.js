const { LocalException, EnumGuilty } = require("library_architecture_mvvm_modify_javascript");

class KeysSharedPreferencesServiceUtility {
    /* User */
    static userQQUniqueId = "userQQUniqueId";
    static userQQCreationTime = "userQQCreationTime";

    constructor() {
        if (new.target === KeysSharedPreferencesServiceUtility) {
            throw new LocalException("KeysSharedPreferencesServiceUtility",EnumGuilty.developer,"KeysSharedPreferencesServiceUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }
}

module.exports = KeysSharedPreferencesServiceUtility;