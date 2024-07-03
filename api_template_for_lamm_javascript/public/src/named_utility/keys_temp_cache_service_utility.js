const { LocalException, EnumGuilty } = require("library_architecture_mvvm_modify_javascript");

class KeysTempCacheServiceUtility {
    /* Strings */
    static stringsQQUniqueIdByUser = "stringsQQUniqueIdByUser";
    /* Ints */
    static intsQQSeasonNumberBySeason = "intsQQSeasonNumberBySeason";
    /* DatesTimes */
    static datesTimesQQCreationTimeByUser = "datesTimesQQCreationTimeByUser";

    constructor() {
        if (new.target === KeysTempCacheServiceUtility) {
            throw new LocalException("KeysTempCacheServiceUtility",EnumGuilty.developer,"KeysTempCacheServiceUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }
}

module.exports = KeysTempCacheServiceUtility;