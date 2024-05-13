import { BaseNamedStreamWState, DefaultStreamWState, EnumRWTMode, NamedCallback, RWTMode, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForOtherVM } from "./enum_data_for_other_vm";
import { DataForOtherVM } from "./data_for_other_vm";
import { KeysSuccessUtility } from "../../named_utility/keys_success_utility";

class OtherVM {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility
    
    // Main objects
    private readonly namedStreamWState: BaseNamedStreamWState<DataForOtherVM>;
    private readonly rwtMode: RWTMode;

    public constructor() {
        this.namedStreamWState = new DefaultStreamWState<DataForOtherVM>(new DataForOtherVM(true));
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
        debugPrint("OtherVM: " + result);
        this.namedStreamWState.notifyStreamDataForNamed();
    }

    private build(): void {
        const dataForNamed = this.namedStreamWState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForOtherVM.isLoading:
                document.getElementById("pMessage").innerText = "Cringe";
                break;
            case EnumDataForOtherVM.exception:
                document.getElementById("pMessage").innerText = dataForNamed.exceptionController.getKeyParameterException;
                break;
            case EnumDataForOtherVM.success:
                document.getElementById("pMessage").innerText = "OtherVM";
                break;
            default:
                break;      
        }
    }
}
new OtherVM();