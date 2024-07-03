const { BaseDataForNamed } = require("library_architecture_mvvm_modify_javascript");
const EnumDataForExampleVM = require("./enum_data_for_example_vm.js");
const AlgorithmsUtility = require("../../named_utility/algorithms_utility.js");

class DataForExampleVM extends BaseDataForNamed {
    authorization;
    isFourHundredOneWYouMustSpecifyAuthorization;
    isFourHundredOneWTokenIsNotCorrect;

    constructor(isLoading, authorization, isFourHundredOneWYouMustSpecifyAuthorization, isFourHundredOneWTokenIsNotCorrect) {
        super(isLoading);
        this.authorization = authorization;
        this.isFourHundredOneWYouMustSpecifyAuthorization = isFourHundredOneWYouMustSpecifyAuthorization;
        this.isFourHundredOneWTokenIsNotCorrect = isFourHundredOneWTokenIsNotCorrect;
    }

    get getEnumDataForNamed() {
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForExampleVM.exception;
        }
        if(this.isFourHundredOneWYouMustSpecifyAuthorization) {
            return EnumDataForExampleVM.fourHundredOneWYouMustSpecifyAuthorization;
        }
        if(this.isFourHundredOneWTokenIsNotCorrect) {
            return EnumDataForExampleVM.fourHundredOneWTokenIsNotCorrect;
        }
        return EnumDataForExampleVM.success;
    }

    toString() {
        return "DataForExampleVM(isLoading: " + this.isLoading + ", " 
            + "exceptionController: " + this.exceptionController + ", " 
            + "authorization: " + this.authorization + ", " 
            + "isFourHundredOneWYouMustSpecifyAuthorization: " + this.isFourHundredOneWYouMustSpecifyAuthorization + ", "
            + "isFourHundredOneWTokenIsNotCorrect: " + this.isFourHundredOneWTokenIsNotCorrect + ")";
    }

    get getArrayWhereSwitchAndTwoElementsParameterExceptionController() {
        switch(this.exceptionController.getKeyParameterException) {
            default:
                return [
                    503,
                    { 
                        statusCode: 503,
                        timestamp : new Date().toLocaleString(),
                        message: "503 (Service Unavailable) The server is currently unable to handle the request due to a temporary overloading or maintenance of the server."
                    }
                ];
        }
    }

    get getJSON() {
        return {
            statusCode: 200,
            timestamp : new Date().toLocaleString(),
            message : "Success"
        };
    }

    isWhereEqualsNullParameterAuthorization() {
        return this.authorization == null;
    }

    isWhereNotEqualsTokenByAPIParameterAuthorization() {
        return AlgorithmsUtility.getStringWhereReplaceBearerFromAuthorization(this.authorization) != process.env.TOKEN;
    }
}

module.exports = DataForExampleVM;