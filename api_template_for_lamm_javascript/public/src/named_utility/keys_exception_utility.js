const { LocalException, EnumGuilty } = require("library_architecture_mvvm_modify_javascript");

class KeysExceptionUtility {
    /* ExampleVM */
    static exampleVMQQFirstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization = "exampleVMQQFirstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization";
    static exampleVMQQFirstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization = "exampleVMQQFirstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization";       
    /* SearchUsersVM */
    static searchUsersVMQQFirstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization = "searchUsersVMQQFirstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization";
    static searchUsersVMQQFirstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization = "searchUsersVMQQFirstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization";

    constructor() {
        if (new.target === KeysExceptionUtility) {
            throw new LocalException("KeysExceptionUtility",EnumGuilty.developer,"KeysExceptionUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }
}

module.exports = KeysExceptionUtility;