import { BaseNamedStreamWState, DefaultStreamWState, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForIndexVM } from "./enum_data_for_index_vm";
import { DataForIndexVM } from "./data_for_index_vm";
import { ReadyDataUtility } from "../../named_utility/ready_data_utility";

class IndexVM {
    // ModelRepository
    // NamedUtility
    
    // NamedStreamWState
    private readonly namedStreamWState: BaseNamedStreamWState<DataForIndexVM>;

    public constructor() {
        this.namedStreamWState = new DefaultStreamWState<DataForIndexVM>(new DataForIndexVM(true));
        this.init();
        this.build();
    }

    private async init(): Promise<void> {
        this.namedStreamWState.listenStreamDataForNamedFromCallback((_data) => {
            this.build();
        });
        const firstRequest= await this.firstRequest();
        debugPrint("IndexVM: " + firstRequest);
        this.namedStreamWState.notifyStreamDataForNamed();
    }

    private build(): void {
        const dataForNamed = this.namedStreamWState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForIndexVM.isLoading:
                document.getElementById("loader").style.display = "block";
                document.getElementById("pMessage").hidden = true;
                break;
            case EnumDataForIndexVM.exception:
                document.getElementById("loader").style.display = "none";
                document.getElementById("pMessage").hidden = false;
                document.getElementById("pMessage").innerText = dataForNamed.exceptionController.getKeyParameterException;
                break;
            case EnumDataForIndexVM.success:
                document.getElementById("loader").style.display = "none";
                document.getElementById("pMessage").hidden = false;
                document.getElementById("pMessage").innerText = "IndexVM";
                break;
            default:
                break;      
        }
    }

    private async firstRequest(): Promise<string> {
        this.namedStreamWState.getDataForNamed.isLoading = false;
        return ReadyDataUtility.success;
    }
}
new IndexVM();