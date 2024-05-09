import { BaseNamedViewModelCutDown, Bools, DefaultStreamWState } from "library_architecture_mvvm_modify_javascript";
import { DataForLoginView } from "./data_for_login_view";
import { KeysSuccessUtility } from "../../named_utility/keys_success_utility";
import { User } from "../../model/user/user";
import { SecurityUser } from "../../model/security_user/security_user";
import { KeysExceptionUtility } from "../../named_utility/keys_exception_utility";

export class TestLoginViewModelCutDown extends BaseNamedViewModelCutDown<DataForLoginView,DefaultStreamWState<DataForLoginView>> {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility

    public constructor(authorization: string, username: string, password: string) {
        super(new DefaultStreamWState<DataForLoginView>(new DataForLoginView(false,authorization,username,password,false,false,false)));
    }

    public override async init(): Promise<string> {
        const isWhereEqualsNullParameterAuthorization = this.getDataForNamedParameterNamedState.isWhereEqualsNullParameterAuthorization();
        if(isWhereEqualsNullParameterAuthorization) {
            return this.firstQQInitQQIsWhereEqualsNullParameterAuthorization();
        }
        const isWhereNotEqualsTokenByAPIParameterAuthorization = this.getDataForNamedParameterNamedState.isWhereNotEqualsTokenByAPIParameterAuthorization();
        if(isWhereNotEqualsTokenByAPIParameterAuthorization) {
            return this.firstQQInitQQIsWhereNotEqualsTokenByAPIParameterAuthorization();
        }
        const isWhereEqualsNullParametersUsernameAndPassword = this.getDataForNamedParameterNamedState.isWhereEqualsNullParametersUsernameAndPassword();
        if(isWhereEqualsNullParametersUsernameAndPassword) {
            return this.firstQQInitQQIsWhereEqualsNullParametersUsernameAndPassword();
        }
        // Simulation get "User" from "username"
        const user = new User("wqwererefeedqqwe",this.getDataForNamedParameterNamedState.username);
        await new Promise(resolve => setTimeout(resolve,1000));
        // Simulation get "SecurityUser" from "uniqueIdByUser","password"
        new SecurityUser(user.uniqueId,this.getDataForNamedParameterNamedState.password);
        await new Promise(resolve => setTimeout(resolve,1000));
        return KeysSuccessUtility.sUCCESS;
    }

    private async firstQQInitQQIsWhereEqualsNullParameterAuthorization(): Promise<string> {
        this.getDataForNamedParameterNamedState.isFourHundredOneWYouMustSpecifyAuthorization = true;
        return KeysExceptionUtility.dataForLoginViewQQIsWhereEqualsNullParameterAuthorization;
    }

    private async firstQQInitQQIsWhereNotEqualsTokenByAPIParameterAuthorization(): Promise<string> {
        this.getDataForNamedParameterNamedState.isFourHundredOneWTokenIsNotCorrect = true;
        return KeysExceptionUtility.dataForLoginViewQQIsWhereNotEqualsTokenByAPIParameterAuthorization;
    }

    private async firstQQInitQQIsWhereEqualsNullParametersUsernameAndPassword(): Promise<string> {
        this.getDataForNamedParameterNamedState.isFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax = true;
        return KeysExceptionUtility.dataForLoginViewQQIsWhereEqualsNullParametersUsernameAndPassword;
    }
}   