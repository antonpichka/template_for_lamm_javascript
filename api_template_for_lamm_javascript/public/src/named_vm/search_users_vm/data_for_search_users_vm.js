const { BaseDataForNamed } = require("library_architecture_mvvm_modify_javascript");
const AlgorithmsUtility = require("../../named_utility/algorithms_utility.js");
const EnumDataForSearchUsersVM = require("./enum_data_for_search_users_vm.js");
const dotenv = require("dotenv");

dotenv.config();

class DataForSearchUsersVM extends BaseDataForNamed {
    authorization;
    q;
    isFourHundredOneWYouMustSpecifyAuthorization;
    isFourHundredOneWTokenIsNotCorrect;
    listUser;

    constructor(isLoading, authorization, q, isFourHundredOneWYouMustSpecifyAuthorization, isFourHundredOneWTokenIsNotCorrect, listUser) {
        super(isLoading);
        this.authorization = authorization;
        this.q = q;
        this.isFourHundredOneWYouMustSpecifyAuthorization = isFourHundredOneWYouMustSpecifyAuthorization;
        this.isFourHundredOneWTokenIsNotCorrect = isFourHundredOneWTokenIsNotCorrect;
        this.listUser = listUser;
    }

    get getEnumDataForNamed() {
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForSearchUsersVM.exception;
        }
        if(this.isFourHundredOneWYouMustSpecifyAuthorization) {
            return EnumDataForSearchUsersVM.fourHundredOneWYouMustSpecifyAuthorization;
        }
        if(this.isFourHundredOneWTokenIsNotCorrect) {
            return EnumDataForSearchUsersVM.fourHundredOneWTokenIsNotCorrect;
        }
        return EnumDataForSearchUsersVM.success;
    }

    toString() {
        return "DataForSearchUsersVM(isLoading: " + this.isLoading + ", " 
            + "exceptionController: " + this.exceptionController + ", " 
            + "authorization: " + this.authorization + ", "
            + "q: " + this.q + ", "
            + "isFourHundredOneWYouMustSpecifyAuthorization: " + this.isFourHundredOneWYouMustSpecifyAuthorization + ", "
            + "isFourHundredOneWTokenIsNotCorrect: " + this.isFourHundredOneWTokenIsNotCorrect + ", "
            + "listUser: " + this.listUser + ")";
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

    get getJSONParameterListUser() {
        const map = this.listUser.listModel.map(itemModel => (
            {
                id: itemModel.id,
                unique_id: itemModel.uniqueId,
                username: itemModel.username,
                created_at: itemModel.createdAt
            }));
        return {
            statusCode: 200,
            timestamp : new Date().toLocaleString(),
            message : "Success",
            users: map
        };
    }

    isWhereEqualsNullParameterAuthorization() {
        return this.authorization == null;
    }

    isWhereNotEqualsTokenByAPIParameterAuthorization() {
        return AlgorithmsUtility.getStringWhereReplaceBearerFromAuthorization(this.authorization) != process.env.TOKEN;
    }
}

module.exports = DataForSearchUsersVM;