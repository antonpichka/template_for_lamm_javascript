import { BaseNamedStreamWState, DefaultStreamWState, EnumRWTMode, NamedCallback, RWTMode, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForIndexVM } from "./enum_data_for_index_vm";
import { DataForIndexVM } from "./data_for_index_vm";
import { KeysSuccessUtility } from "../../named_utility/keys_success_utility";

class IndexVM {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility
    
    // Main objects
    private readonly namedStreamWState: BaseNamedStreamWState<DataForIndexVM>;
    private readonly rwtMode: RWTMode;

    public constructor() {
        this.namedStreamWState = new DefaultStreamWState<DataForIndexVM>(new DataForIndexVM(true));
        this.rwtMode = new RWTMode(
            EnumRWTMode.test,
            [
                new NamedCallback("init",async () => {
                    await new Promise(resolve => setTimeout(resolve,1000));
                    this.namedStreamWState.getDataForNamed.isLoading = false;
                    return KeysSuccessUtility.sUCCESS;
                }),
            ],
            [
                new NamedCallback("init",async () => {
                    await new Promise(resolve => setTimeout(resolve,1000));
                    this.namedStreamWState.getDataForNamed.isLoading = false;
                    return KeysSuccessUtility.sUCCESS;
                }),
            ]
        );
        this.init();
        this.build();
    }

    private async init(): Promise<void> {
        this.namedStreamWState.listenStreamDataForNamedFromCallback((data) => {
            this.build();
        });
        const result = await this.rwtMode.getNamedCallbackFromName("init").callback();
        debugPrint("IndexVM: " + result);
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
}
new IndexVM();