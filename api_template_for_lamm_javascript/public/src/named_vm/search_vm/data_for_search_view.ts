import { BaseDataForNamed } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForSearchView } from "./enum_data_for_search_view";

export class DataForSearchView extends BaseDataForNamed<EnumDataForSearchView> {
    public readonly authorization: string;
    public readonly q: string;
    public tokenByAPI: string;
    public listWUsernameByUser: Array<string>;

    public constructor(isLoading: boolean, authorization: string, q: string, tokenByAPI: string, listWUsernameByUser: Array<string>) {
        super(isLoading);
        this.authorization = authorization;
        this.q = q;
        this.tokenByAPI = tokenByAPI;
        this.listWUsernameByUser = listWUsernameByUser;
    }

    public override get getEnumDataForNamed(): EnumDataForSearchView {
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForSearchView.exception;
        }
        if(this.authorization == null) {
            return EnumDataForSearchView.fourHundredOneWYouMustSpecifyAuthorization;
        }
        if(this.authorization != this.tokenByAPI) {
            return EnumDataForSearchView.fourHundredOneWTokenIsNotCorrect;
        }
        if(this.q == null) {
            return EnumDataForSearchView.fourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax;
        }
        return EnumDataForSearchView.success;
    }
}