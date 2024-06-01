import { BaseDataForNamed } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForLoginVM } from "./enum_data_for_login_vm";
import { KeysAPIUtility } from "../../named_utility/keys_api_utility";
import { AlgorithmsUtility } from "../../named_utility/algorithms_utility";

export class DataForLoginVM extends BaseDataForNamed<EnumDataForLoginVM> {
    public readonly authorization: string;
    public readonly username: string;
    public readonly password: string;
    public isFourHundredOneWYouMustSpecifyAuthorization: boolean;
    public isFourHundredOneWTokenIsNotCorrect: boolean;
    public isFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax: boolean;

    public constructor(isLoading: boolean, authorization: string, username: string, password: string, isFourHundredOneWYouMustSpecifyAuthorization: boolean, isFourHundredOneWTokenIsNotCorrect: boolean, isFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax: boolean) {
        super(isLoading);
        this.authorization = authorization;
        this.username = username;
        this.password = password;
        this.isFourHundredOneWYouMustSpecifyAuthorization = isFourHundredOneWYouMustSpecifyAuthorization;
        this.isFourHundredOneWTokenIsNotCorrect = isFourHundredOneWTokenIsNotCorrect;
        this.isFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax = isFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax;
    }

    public override get getEnumDataForNamed(): EnumDataForLoginVM {
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForLoginVM.exception;
        }
        if(this.isFourHundredOneWYouMustSpecifyAuthorization) {
            return EnumDataForLoginVM.fourHundredOneWYouMustSpecifyAuthorization;
        }
        if(this.isFourHundredOneWTokenIsNotCorrect) {
            return EnumDataForLoginVM.fourHundredOneWTokenIsNotCorrect;
        }
        if(this.isFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax) {
            return EnumDataForLoginVM.fourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax;
        }
        return EnumDataForLoginVM.success;
    }

    public override toString(): string {
        return "DataForLoginVM(isLoading: " + this.isLoading + ", " 
            + "exceptionController: " + this.exceptionController + ", " 
            + "authorization: " + this.authorization + ", " 
            + "username: " + this.username + ", "
            + "password: " + this.password + ", "
            + "isFourHundredOneWYouMustSpecifyAuthorization: " + this.isFourHundredOneWYouMustSpecifyAuthorization + ", "
            + "isFourHundredOneWTokenIsNotCorrect: " + this.isFourHundredOneWTokenIsNotCorrect + ", " 
            + "isFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax: " + this.isFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax + ")";
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
            case "401":
                return [
                    401,
                    {
                        message: "401 (Unauthorized) The request requires user authentication.",
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

    public isWhereEqualsNullParameterAuthorization(): boolean {
        return this.authorization == null;
    }

    public isWhereNotEqualsTokenByAPIParameterAuthorization(): boolean {
        return AlgorithmsUtility.getStringWhereReplaceBearerFromAuthorization(this.authorization) != KeysAPIUtility.aPIQQToken;
    }

    public isWhereEqualsNullWEmptyParametersUsernameAndPassword(): boolean {
        return this.username == null || this.password == null 
            || this.username == "" || this.password == "";
    }
}