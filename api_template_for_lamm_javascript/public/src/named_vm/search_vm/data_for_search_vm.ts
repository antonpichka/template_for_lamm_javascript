import { BaseDataForNamed } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForSearchVM } from "./enum_data_for_search_vm";
import { KeysAPIUtility } from "../../named_utility/keys_api_utility";
import { ListUser } from "../../model/user/list_user";
import { User } from "../../model/user/user";
import { AlgorithmsUtility } from "../../named_utility/algorithms_utility";

export class DataForSearchVM extends BaseDataForNamed<EnumDataForSearchVM> {
    public readonly authorization: string;
    public readonly q: string;
    public listUser: ListUser<User>;
    public isFourHundredOneWYouMustSpecifyAuthorization: boolean;
    public isFourHundredOneWTokenIsNotCorrect: boolean;
    public isFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax: boolean;

    public constructor(isLoading: boolean, authorization: string, q: string, listUser: ListUser<User>) {
        super(isLoading);
        this.authorization = authorization;
        this.q = q;
        this.listUser = listUser;
    }

    public override get getEnumDataForNamed(): EnumDataForSearchVM {
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForSearchVM.exception;
        }
        if(this.isFourHundredOneWYouMustSpecifyAuthorization) {
            return EnumDataForSearchVM.fourHundredOneWYouMustSpecifyAuthorization;
        }
        if(this.isFourHundredOneWTokenIsNotCorrect) {
            return EnumDataForSearchVM.fourHundredOneWTokenIsNotCorrect;
        }
        if(this.isFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax) {
            return EnumDataForSearchVM.fourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax;
        }
        return EnumDataForSearchVM.success;
    }

    public get getArrayWhereSwitchAndTwoElementsParameterExceptionController(): Array<any> {
        switch(this.exceptionController.getKeyParameterException) {
            default:
                return [
                    503,
                    { 
                        message: "503 (Service Unavailable) The server is currently unable to handle the request due to a temporary overloading or maintenance of the server."
                    }
                ];
        }
    }

    public get getJSONParameterListUser(): {} {
        const listModel = this.listUser.listModel.map(itemModel => ({ username: itemModel.username }));
        return { 
            users: listModel
        };
    }

    public isWhereEqualsNullParameterAuthorization(): boolean {
        return this.authorization == null;
    }

    public isWhereNotEqualsTokenByAPIParameterAuthorization(): boolean {
        return AlgorithmsUtility.getStringWhereReplaceBearerFromAuthorization(this.authorization) != KeysAPIUtility.aPIQQToken;
    }

    public isWhereEqualsNullWEmptyParameterQ(): boolean {
        return this.q == null || this.q == "";
    }
}