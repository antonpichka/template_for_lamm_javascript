const { DefaultState, debugPrint } = require("library_architecture_mvvm_modify_javascript");
const EnumDataForExampleVM = require("./enum_data_for_example_vm.js");
const DataForExampleVM = require("./data_for_example_vm.js");
const KeysExceptionUtility = require("../../named_utility/keys_exception_utility.js");
const ReadyDataUtility = require("../../named_utility/ready_data_utility.js");

class ExampleVM {
    // ModelRepository
    // NamedUtility
    
    // NamedStreamWState
    #namedState;

    constructor(authorization) 
    {
        this.#namedState = new DefaultState(new DataForExampleVM(false,authorization,false,false));
    }
     
    async initWBuild(
        callbackWException,
        callbackWFourHundredOneWYouMustSpecifyAuthorization,
        callbackWFourHundredOneWTokenIsNotCorrect,
        callbackWSuccess) 
    {
        const firstRequest = await this.#firstRequest();
        debugPrint("ExampleVM: " + firstRequest);
        const dataForNamed = this.#namedState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForExampleVM.exception:
                return callbackWException(dataForNamed.getArrayWhereSwitchAndTwoElementsParameterExceptionController);
            case EnumDataForExampleVM.fourHundredOneWYouMustSpecifyAuthorization:
                return callbackWFourHundredOneWYouMustSpecifyAuthorization();
            case EnumDataForExampleVM.fourHundredOneWTokenIsNotCorrect:
                return callbackWFourHundredOneWTokenIsNotCorrect();
            case EnumDataForExampleVM.success:
                return callbackWSuccess(dataForNamed.getJSON);
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
        return ReadyDataUtility.success;
    }

    async #firstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization() {
        this.#namedState.getDataForNamed.isFourHundredOneWYouMustSpecifyAuthorization = true;
        return KeysExceptionUtility.exampleVMQQFirstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization;
    }

    async #firstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization() {
        this.#namedState.getDataForNamed.isFourHundredOneWTokenIsNotCorrect = true;
        return KeysExceptionUtility.exampleVMQQFirstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization;
    }
}

module.exports = ExampleVM;