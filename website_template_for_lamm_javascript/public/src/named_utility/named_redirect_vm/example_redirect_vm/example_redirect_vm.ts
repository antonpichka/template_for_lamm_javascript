import { BaseNamedState, DefaultState, EnumRWTMode, NamedCallback, RWTMode, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForExampleRedirectVM } from "./enum_data_for_example_redirect_vm";
import { DataForExampleRedirectVM } from "./data_for_example_redirect_vm";
import { KeysSuccessUtility } from "../../keys_success_utility";

export class ExampleRedirectVM {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility
    
    // Main objects
    private readonly namedState: BaseNamedState<DataForExampleRedirectVM>;
    private readonly rwtMode: RWTMode;

    public constructor(callbackWException: () => void,callbackWSuccess: () => void) {
        this.namedState = new DefaultState<DataForExampleRedirectVM>(new DataForExampleRedirectVM(false));
        this.rwtMode = new RWTMode(
            EnumRWTMode.test,
            [
                new NamedCallback("init",async () => {
                    await new Promise(resolve => setTimeout(resolve,1000));
                    return KeysSuccessUtility.sUCCESS;
                }),
            ],
            [
                new NamedCallback("init",async () => {
                    await new Promise(resolve => setTimeout(resolve,1000));
                    return KeysSuccessUtility.sUCCESS;
                }),
            ]
        );
        this.initWBuild(callbackWException,callbackWSuccess);
    }
     
    private async initWBuild(callbackWException: () => void,callbackWSuccess: () => void): Promise<void> {
        const result = await this.rwtMode.getNamedCallbackFromName("init").callback();
        debugPrint("ExampleRedirectVM: " + result);
        const dataForNamed = this.namedState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForExampleRedirectVM.exception:
                callbackWException();
                break;
            case EnumDataForExampleRedirectVM.success:
                callbackWSuccess();
                break;
            default:
                break;      
        }
    }
}