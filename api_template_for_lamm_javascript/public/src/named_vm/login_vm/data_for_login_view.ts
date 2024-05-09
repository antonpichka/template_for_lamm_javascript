import { BaseDataForNamed } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForLoginView } from "./enum_data_for_login_view";
import { KeysAPIUtility } from "../../named_utility/keys_api_utility";

export class DataForLoginView extends BaseDataForNamed<EnumDataForLoginView> {
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

    public override get getEnumDataForNamed(): EnumDataForLoginView {
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForLoginView.exception;
        }
        if(this.isFourHundredOneWYouMustSpecifyAuthorization) {
            return EnumDataForLoginView.fourHundredOneWYouMustSpecifyAuthorization;
        }
        if(this.isFourHundredOneWTokenIsNotCorrect) {
            return EnumDataForLoginView.fourHundredOneWTokenIsNotCorrect;
        }
        if(this.isFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax) {
            return EnumDataForLoginView.fourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax;
        }
        return EnumDataForLoginView.success;
    }


    public get getArrayWhereSwitchAndTwoElementsParameterExceptionController(): Array<any> {
        switch(this.exceptionController.getKeyParameterException) {
            case "404":
                return [
                    404,
                    {
                        message: "404 (Not Found) This user does not exist",
                        q: "lol",
                        w: "+lol"
                    }
                ];
            case "401":
                return [
                    401,
                    {
                        message: "401 (Unauthorized) Wrong password",
                        additionalMessage: "lol, write password in note app"
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
        return this.authorization != KeysAPIUtility.aPIQQToken;
    }

    public isWhereEqualsNullParametersUsernameAndPassword(): boolean {
        return this.username == null || this.password == null;
    }
}