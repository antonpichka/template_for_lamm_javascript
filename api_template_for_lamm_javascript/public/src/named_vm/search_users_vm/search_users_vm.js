const { debugPrint } = require("library_architecture_mvvm_modify_javascript");
const KeysExceptionUtility = require("../../named_utility/keys_exception_utility.js");
const ReadyDataUtility = require("../../named_utility/ready_data_utility.js");
const EnumDataForSearchUsersVM = require("./enum_data_for_search_users_vm.js");
const FactoryObjectUtility = require("../../named_utility/factory_object_utility.js");

class SearchUsersVM {
    // ModelRepository
    #userRepository = FactoryObjectUtility.getUserRepository;

    // NamedUtility
    
    // NamedStreamWState
    #namedState;

    constructor(authorization, q) 
    {
        this.#namedState = FactoryObjectUtility.getNamedStateWhereDataWSearchUsersVMFromAuthorizationAndQ(authorization,q);
    }
     
    async initWBuild(
        callbackWException,
        callbackWFourHundredOneWYouMustSpecifyAuthorization,
        callbackWFourHundredOneWTokenIsNotCorrect,
        callbackWSuccess) 
    {
        const firstRequest = await this.#firstRequest();
        debugPrint("SearchUsersVM: " + firstRequest);
        const dataForNamed = this.#namedState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForSearchUsersVM.exception:
                return callbackWException(dataForNamed.getArrayWhereSwitchAndTwoElementsParameterExceptionController);
            case EnumDataForSearchUsersVM.fourHundredOneWYouMustSpecifyAuthorization:
                return callbackWFourHundredOneWYouMustSpecifyAuthorization();
            case EnumDataForSearchUsersVM.fourHundredOneWTokenIsNotCorrect:
                return callbackWFourHundredOneWTokenIsNotCorrect();
            case EnumDataForSearchUsersVM.success:
                return callbackWSuccess(dataForNamed.getJSONParameterListUser);
            default:
                return;   
        }
    }

    dispose() {
        this.#namedState.dispose();        
    }

    async #firstRequest() {
        const isWhereEqualsNullParameterAuthorization = this.#namedState.getDataForNamed.isWhereEqualsNullParameterAuthorization();
        if(isWhereEqualsNullParameterAuthorization) {
            return this.#firstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization();
        }
        const isWhereNotEqualsTokenByAPIParameterAuthorization = this.#namedState.getDataForNamed.isWhereNotEqualsTokenByAPIParameterAuthorization();
        if(isWhereNotEqualsTokenByAPIParameterAuthorization) {
            return this.#firstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization();
        }
        const getListUserWhereUsedSearchFromQParameterMySQLService = await this.#userRepository.getListUserWhereUsedSearchFromQParameterMySQLService(this.#namedState.getDataForNamed.q);
        if(getListUserWhereUsedSearchFromQParameterMySQLService.exceptionController.isWhereNotEqualsNullParameterException()) {
            return this.#firstQQFirstRequestQQGetListUserWhereUsedSearchFromQParameterMySQLService(getListUserWhereUsedSearchFromQParameterMySQLService.exceptionController);
        }
        this.#namedState.getDataForNamed.listUser = getListUserWhereUsedSearchFromQParameterMySQLService.parameter.getClone;
        return ReadyDataUtility.success;
    }

    async #firstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization() {
        this.#namedState.getDataForNamed.isFourHundredOneWYouMustSpecifyAuthorization = true;
        return KeysExceptionUtility.searchUsersVMQQFirstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization;
    }

    async #firstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization() {
        this.#namedState.getDataForNamed.isFourHundredOneWTokenIsNotCorrect = true;
        return KeysExceptionUtility.searchUsersVMQQFirstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization;
    }

    async #firstQQFirstRequestQQGetListUserWhereUsedSearchFromQParameterMySQLService(exceptionController) {
        this.#namedState.getDataForNamed.exceptionController = exceptionController;
        return exceptionController.getKeyParameterException;
    }
}

module.exports = SearchUsersVM;