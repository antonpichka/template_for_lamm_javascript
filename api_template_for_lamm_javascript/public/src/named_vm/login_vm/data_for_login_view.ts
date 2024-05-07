import { BaseDataForNamed } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForLoginView } from "./enum_data_for_login_view";

export class DataForLoginView extends BaseDataForNamed<EnumDataForLoginView> {
    public readonly authorization: string;
    public readonly username: string;
    public readonly password: string; 
    public tokenByAPI: string;
    public usernameByUser: string;

    public constructor(isLoading: boolean, authorization: string, username: string, password: string, tokenByAPI: string, usernameByUser: string) {
        super(isLoading);
        this.authorization = authorization;
        this.username = username;
        this.password = password;
        this.tokenByAPI = tokenByAPI;
        this.usernameByUser = usernameByUser;
    }

    public override get getEnumDataForNamed(): EnumDataForLoginView {
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForLoginView.exception;
        }
        if(this.authorization == null) {
            return EnumDataForLoginView.fourHundredOneWYouMustSpecifyAuthorization;
        }
        if(this.authorization != this.tokenByAPI) {
            return EnumDataForLoginView.fourHundredOneWTokenIsNotCorrect;
        }
        if(this.username == null || this.password == null) {
            return EnumDataForLoginView.fourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax;
        }
        if(this.username == this.usernameByUser) {
            return EnumDataForLoginView.fourHundredNineWSuchDataIsAlreadyInTheDatabase;
        }
        return EnumDataForLoginView.success;
    }
}