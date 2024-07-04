const { LocalException, EnumGuilty } = require("library_architecture_mvvm_modify_javascript");

class KeysMySQLServiceUtility {
    /* User */
    static user = "users";
    static userQQId = "id";
    static userQQUniqueId = "unique_id";
    static userQQUsername = "username";
    static userQQCreatedAt = "created_at";

    constructor() {
        if (new.target === KeysMySQLServiceUtility) {
            throw new LocalException("KeysMySQLServiceUtility",EnumGuilty.developer,"KeysMySQLServiceUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }
}

module.exports = KeysMySQLServiceUtility;