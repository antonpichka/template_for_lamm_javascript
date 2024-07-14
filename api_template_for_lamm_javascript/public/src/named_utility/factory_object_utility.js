const { LocalException, EnumGuilty, DefaultState } = require("library_architecture_mvvm_modify_javascript");
const ListUser = require("../model/user/list_user.js");
const ExampleRepository = require("../model_repository/example_repository/example_repository.js");
const UserRepository = require("../model_repository/user_repository/user_repository.js");
const DataForExampleVM = require("../named_vm/example_vm/data_for_example_vm.js");
const DataForSearchUsersVM = require("../named_vm/search_users_vm/data_for_search_users_vm.js");

class FactoryObjectUtility {
    constructor() {
        if (new.target === FactoryObjectUtility) {
            throw new LocalException("FactoryObjectUtility",EnumGuilty.developer,"FactoryObjectUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    /* ModelRepository */
    static get getExampleRepository() {
        return new ExampleRepository();
    }

    static get getUserRepository() {
        return new UserRepository();
    }

    /* NamedStreamWState */
    static getNamedStateWhereDataWExampleVMFromAuthorization(authorization) {
        return new DefaultState(new DataForExampleVM(false,authorization,false,false));
    }

    static getNamedStateWhereDataWSearchUsersVMFromAuthorizationAndQ(authorization,q) {
        return new DefaultState(new DataForSearchUsersVM(false,authorization,q,false,false,new ListUser([])));
    }
}

module.exports = FactoryObjectUtility;