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

    public constructor() {
        this.namedState = new DefaultState<DataForOtherRedirectVM>(new DataForOtherRedirectVM(false));
        this.rwtMode = new RWTMode(
            EnumRWTMode.test,
            [
                new NamedCallback("init",this.initReleaseCallback),
            ],
            [
                new NamedCallback("init",this.initTestCallback),
            ]
        );
    }
     
    public async initWBuild(
        callbackWException: () => void,
        callbackWSuccess: () => void): Promise<void>
    {
        const callback = await this.rwtMode.getNamedCallbackFromName("init").callback();
        debugPrint("OtherRedirectVM: " + callback);
        const dataForNamed = this.namedState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForOtherRedirectVM.exception:
                return callbackWException();
            case EnumDataForOtherRedirectVM.success:
                return callbackWSuccess();
            default:
                return;      
        }
    }

    public dispose(): void 
    {
        this.namedState.dispose();        
    }

    private initReleaseCallback = async (): Promise<string> => {
        await new Promise(resolve => setTimeout(resolve,1000));
        return KeysSuccessUtility.sUCCESS;
    }

    private initTestCallback = async (): Promise<string> => {
        await new Promise(resolve => setTimeout(resolve,1000));
        return KeysSuccessUtility.sUCCESS;
    }
}