import { BaseNamedViewModel, DefaultStreamWState } from "library_architecture_mvvm_modify_javascript";
import { DataForIndexView } from "./data_for_index_view";
import { IIndexViewModel } from "./i_index_view_model";
import { KeysSuccessUtility } from "../../named_utility/keys_success_utility";

export class IndexViewModel extends BaseNamedViewModel<DataForIndexView,DefaultStreamWState<DataForIndexView>> implements IIndexViewModel {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility

    public constructor() {
        super(new DefaultStreamWState<DataForIndexView>(new DataForIndexView(true)));
    }

    public override async init(): Promise<string> {
        this.getDataForNamedParameterNamedStreamWState.isLoading = false;
        return KeysSuccessUtility.sUCCESS;
    }
}