import { BaseNamedViewModelCutDown, DefaultStreamWState } from "library_architecture_mvvm_modify_javascript";
import { DataForOtherRedirectView } from "./data_for_other_redirect_view";
import { KeysSuccessUtility } from "../../keys_success_utility";

export class TestOtherRedirectViewModelCutDown extends BaseNamedViewModelCutDown<DataForOtherRedirectView,DefaultStreamWState<DataForOtherRedirectView>> {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility

    public constructor() {
        super(new DefaultStreamWState<DataForOtherRedirectView>(new DataForOtherRedirectView(false)));
    }

    public override async init(): Promise<string> {
        return KeysSuccessUtility.sUCCESS;
    }
}