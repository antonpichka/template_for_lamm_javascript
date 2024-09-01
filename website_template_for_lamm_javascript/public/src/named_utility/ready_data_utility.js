const { LocalException, EnumGuilty } = require("library_architecture_mvvm_modify_javascript");

class ReadyDataUtility {
    static #unknown = "unknown";
    static #success = "success";

    constructor() {
        if (new.target === ReadyDataUtility) {
            throw new LocalException("ReadyDataUtility",EnumGuilty.developer,"ReadyDataUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get unknown() {
        return this.#unknown;
    }

    static get success() {
        return this.#success;
    }
}

module.exports = ReadyDataUtility;