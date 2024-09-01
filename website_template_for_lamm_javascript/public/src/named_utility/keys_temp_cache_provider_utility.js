const { LocalException, EnumGuilty } = require("library_architecture_mvvm_modify_javascript");

class KeysTempCacheProviderUtility {
    /* Example */
    static #example = "example";
    /* EnumBottomNavigationBar */
    static #enumBottomNavigationBar = "enumBottomNavigationBar";
    /* Q */
    static #q = "q";

    constructor() {
        if (new.target === KeysTempCacheProviderUtility) {
            throw new LocalException("KeysTempCacheProviderUtility",EnumGuilty.developer,"KeysTempCacheProviderUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get example() {
        return this.#example;
    }

    static get enumBottomNavigationBar() {
        return this.#enumBottomNavigationBar;
    }

    static get q() {
        return this.#q;
    }
}

module.exports = KeysTempCacheProviderUtility;