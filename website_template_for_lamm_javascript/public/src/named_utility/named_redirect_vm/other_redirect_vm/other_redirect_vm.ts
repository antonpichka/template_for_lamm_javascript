import { BaseNamedState, DefaultState, EnumRWTMode, NamedCallback, RWTMode, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForOtherRedirectVM } from "./enum_data_for_other_redirect_vm";
import { DataForOtherRedirectVM } from "./data_for_other_redirect_vm";
import { KeysSuccessUtility } from "../../keys_success_utility";

export class OtherRedirectVM {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility
    
    // Main objects
    private readonly namedState: BaseNamedState<DataForOtherRedirectVM>;
    private readonly rwtMode: RWTMode;

    public constructor(callbackWException: () => void,callbackWSuccess: () => void) {
        this.namedState = new DefaultState<DataForOtherRedirectVM>(new DataForOtherRedirectVM(false));
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
        debugPrint("OtherRedirectVM: " + result);
        const dataForNamed = this.namedState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForOtherRedirectVM.exception:
                callbackWException();
                break;
            case EnumDataForOtherRedirectVM.success:
                callbackWSuccess();
                break;
            default:
                break;      
        }
    }
}