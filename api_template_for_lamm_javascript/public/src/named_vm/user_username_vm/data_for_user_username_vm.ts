import { BaseDataForNamed } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForUserUsernameVM } from "./enum_data_for_user_username_vm";
import { KeysAPIUtility } from "../../named_utility/keys_api_utility";
import { AlgorithmsUtility } from "../../named_utility/algorithms_utility";
import { User } from "../../model/user/user";

export class DataForUserUsernameVM extends BaseDataForNamed<EnumDataForUserUsernameVM> {
    public readonly authorization: string;
    public readonly username: string;
    public user: User;
    public isFourHundredOneWYouMustSpecifyAuthorization: boolean;
    public isFourHundredOneWTokenIsNotCorrect: boolean;

    public constructor(isLoading: boolean, authorization: string, username: string, user: User, isFourHundredOneWYouMustSpecifyAuthorization: boolean, isFourHundredOneWTokenIsNotCorrect: boolean) {
        super(isLoading);
        this.authorization = authorization;
        this.username = username;
        this.user = user;
        this.isFourHundredOneWYouMustSpecifyAuthorization = isFourHundredOneWYouMustSpecifyAuthorization;
        this.isFourHundredOneWTokenIsNotCorrect = isFourHundredOneWTokenIsNotCorrect;
    }

    public override get getEnumDataForNamed(): EnumDataForUserUsernameVM {
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForUserUsernameVM.exception;
        }
        if(this.isFourHundredOneWYouMustSpecifyAuthorization) {
            return EnumDataForUserUsernameVM.fourHundredOneWYouMustSpecifyAuthorization;
        }
        if(this.isFourHundredOneWTokenIsNotCorrect) {
            return EnumDataForUserUsernameVM.fourHundredOneWTokenIsNotCorrect;
        }
        return EnumDataForUserUsernameVM.success;
    }


    public get getArrayWhereSwitchAndTwoElementsParameterExceptionController(): Array<any> {
        switch(this.exceptionController.getKeyParameterException) {
            case "404":
                return [
                    404,
                    {
                        message: "404 (Not Found) The server has not found anything matching the Request-URI.",
                    }
                ];
            default:
                return [
                    503,
                    { 
                        message: "503 (Service Unavailable) The server is currently unable to handle the request due to a temporary overloading or maintenance of the server."
                    }
                ];
        }
    }

    public get getJSONParameterUser(): {} {
        return { 
            user: ({
                id: this.user.uniqueId, 
                username: this.user.username
            })
        };
    }

    public isWhereEqualsNullParameterAuthorization(): boolean {
        return this.authorization == null;
    }

    public isWhereNotEqualsTokenByAPIParameterAuthorization(): boolean {
        return AlgorithmsUtility.getStringWhereReplaceBearerFromAuthorization(this.authorization) != KeysAPIUtility.aPIQQToken;
    }
}