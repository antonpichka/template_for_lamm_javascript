import { BaseNamedViewModelCutDown, DefaultStreamWState } from "library_architecture_mvvm_modify_javascript";
import { DataForLoginView } from "./data_for_login_view";
import { KeysSuccessUtility } from "../../named_utility/keys_success_utility";

export class LoginViewModelCutDown extends BaseNamedViewModelCutDown<DataForLoginView,DefaultStreamWState<DataForLoginView>> {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility

    public constructor(authorization: string, username: string, password: string) {
        super(new DefaultStreamWState<DataForLoginView>(new DataForLoginView(false,authorization,username,password,false,false,false)));
    }

    public override async init(): Promise<string> {
        return KeysSuccessUtility.sUCCESS;
    }
}