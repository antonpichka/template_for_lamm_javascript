import { BaseNamedViewModelCutDown, DefaultStreamWState } from "library_architecture_mvvm_modify_javascript";
import { DataForSearchView } from "./data_for_search_view";
import { KeysSuccessUtility } from "../../named_utility/keys_success_utility";

export class SearchViewModelCutDown extends BaseNamedViewModelCutDown<DataForSearchView,DefaultStreamWState<DataForSearchView>> {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility

    public constructor(authorization: string, q: string) {
        super(new DefaultStreamWState<DataForSearchView>(new DataForSearchView(false,authorization,q,"",[])));
    }

    public override async init(): Promise<string> {
        return KeysSuccessUtility.sUCCESS;
    }
}