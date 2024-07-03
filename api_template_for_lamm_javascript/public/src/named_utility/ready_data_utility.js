const { LocalException, EnumGuilty } = require("library_architecture_mvvm_modify_javascript");

class ReadyDataUtility {
    static success = "success";
    static unknown = "unknown";

    constructor() {
        if (new.target === ReadyDataUtility) {
            throw new LocalException("ReadyDataUtility",EnumGuilty.developer,"ReadyDataUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }
}

module.exports = ReadyDataUtility;