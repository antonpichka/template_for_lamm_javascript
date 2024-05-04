import { BaseNamedViewModel, DefaultStreamWState } from "library_architecture_mvvm_modify_javascript";
import { KeysSuccessUtility } from "../../named_utility/keys_success_utility";
import { DataForNotFoundView } from "./data_for_not_found_view";
import { INotFoundViewModel } from "./i_not_found_view_model";

export class NotFoundViewModel extends BaseNamedViewModel<DataForNotFoundView,DefaultStreamWState<DataForNotFoundView>> implements INotFoundViewModel {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility

    public constructor() {
        super(new DefaultStreamWState<DataForNotFoundView>(new DataForNotFoundView(true)));
    }

    public override async init(): Promise<string> {
        this.getDataForNamedParameterNamedStreamWState.isLoading = false;
        return KeysSuccessUtility.sUCCESS;
    }
}