import { BaseNamedViewModel, DefaultStreamWState } from "library_architecture_mvvm_modify_javascript";
import { KeysSuccessUtility } from "../../named_utility/keys_success_utility";
import { DataForOtherView } from "./data_for_other_view";
import { IOtherViewModel } from "./i_other_view_model";

export class TestOtherViewModel extends BaseNamedViewModel<DataForOtherView,DefaultStreamWState<DataForOtherView>> implements IOtherViewModel {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility

    public constructor() {
        super(new DefaultStreamWState<DataForOtherView>(new DataForOtherView(true)));
    }

    public override async init(): Promise<string> {
        this.getDataForNamedParameterNamedStreamWState.isLoading = false;
        return KeysSuccessUtility.sUCCESS;
    }
}