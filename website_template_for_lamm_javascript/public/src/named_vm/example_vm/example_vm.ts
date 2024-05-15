import { BaseNamedStreamWState, DefaultStreamWState, EnumRWTMode, NamedCallback, RWTMode, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForExampleVM } from "./enum_data_for_example_vm";
import { DataForExampleVM } from "./data_for_example_vm";
import { KeysSuccessUtility } from "../../named_utility/keys_success_utility";

class ExampleVM {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility
    
    // Main objects
    private readonly namedStreamWState: BaseNamedStreamWState<DataForExampleVM>;
    private readonly rwtMode: RWTMode;

    public constructor() {
        this.namedStreamWState = new DefaultStreamWState<DataForExampleVM>(new DataForExampleVM(true));
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
        debugPrint("ExampleVM: " + result);
        this.namedStreamWState.notifyStreamDataForNamed();
    }

    private build(): void {
        const dataForNamed = this.namedStreamWState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForExampleVM.isLoading:
                break;
            case EnumDataForExampleVM.exception:
                break;
            case EnumDataForExampleVM.success:
                break;
            default:
                break;      
        }
    }
}
new ExampleVM();