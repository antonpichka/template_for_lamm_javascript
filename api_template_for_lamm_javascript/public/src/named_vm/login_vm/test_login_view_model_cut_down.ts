import { BaseNamedViewModelCutDown, DefaultStreamWState } from "library_architecture_mvvm_modify_javascript";
import { DataForLoginView } from "./data_for_login_view";
import { KeysSuccessUtility } from "../../named_utility/keys_success_utility";

export class TestLoginViewModelCutDown extends BaseNamedViewModelCutDown<DataForLoginView,DefaultStreamWState<DataForLoginView>> {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility

    public constructor(authorization: string, username: string, password: string) {
        super(new DefaultStreamWState<DataForLoginView>(new DataForLoginView(false,authorization,username,password,"","")));
    }

    public override async init(): Promise<string> {
        // Simulation get "API"
        const tokenByAPI = "f434343fwesferrrewsqswqwwrewdwq1";
        // Simulation get "User" from "username"
        const usernameByUser = "qwe";
        await new Promise(resolve => setTimeout(resolve,1000));
        this.getDataForNamedParameterNamedState.tokenByAPI = tokenByAPI;
        this.getDataForNamedParameterNamedState.usernameByUser = usernameByUser;
        return KeysSuccessUtility.sUCCESS;
    }
}