import { BaseNamedStreamWState, DefaultStreamWState, EnumRWTMode, NamedCallback, RWTMode, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForNotFoundVM} from "./enum_data_for_not_found_vm"
import { DataForNotFoundVM } from "./data_for_not_found_vm";
import { KeysSuccessUtility } from "../../named_utility/keys_success_utility";

class NotFoundVM {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility
    
    // Main objects
    private readonly namedStreamWState: BaseNamedStreamWState<DataForNotFoundVM>;
    private readonly rwtMode: RWTMode;

    public constructor() {
        this.namedStreamWState = new DefaultStreamWState<DataForNotFoundVM>(new DataForNotFoundVM(true));
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
        debugPrint("NotFoundVM: " + result);
        this.namedStreamWState.notifyStreamDataForNamed();
    }

    private build(): void {
        const dataForNamed = this.namedStreamWState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForNotFoundVM.isLoading:
                break;
            case EnumDataForNotFoundVM.exception:
                break;
            case EnumDataForNotFoundVM.success:
                break;
            default:
                break;      
        }
    }
}
new NotFoundVM();