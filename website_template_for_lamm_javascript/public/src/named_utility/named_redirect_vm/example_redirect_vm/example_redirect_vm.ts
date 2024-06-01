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

    public constructor() {
        this.namedState = new DefaultState<DataForExampleRedirectVM>(new DataForExampleRedirectVM(false));
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
        debugPrint("ExampleRedirectVM: " + callback);
        const dataForNamed = this.namedState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForExampleRedirectVM.exception:
                return callbackWException();
            case EnumDataForExampleRedirectVM.success:
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