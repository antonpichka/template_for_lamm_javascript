import { BaseNamedState, DefaultState, EnumRWTMode, NamedCallback, RWTMode, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForExampleVM } from "./enum_data_for_example_vm";
import { DataForExampleVM } from "./data_for_example_vm";
import { KeysSuccessUtility } from "../../named_utility/keys_success_utility";
import { KeysExceptionUtility } from "../../named_utility/keys_exception_utility";

export class ExampleVM {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility
    
    // Main objects
    private readonly namedState: BaseNamedState<DataForExampleVM>;
    private readonly rwtMode: RWTMode;

    public constructor(authorization: string) 
    {
        this.namedState = new DefaultState<DataForExampleVM>(new DataForExampleVM(false,authorization,false,false));
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
        callbackWException: (list: Array<any>) => void,
        callbackWFourHundredOneWYouMustSpecifyAuthorization: () => void,
        callbackWFourHundredOneWTokenIsNotCorrect: () => void,
        callbackWSuccess: (json: {}) => void): Promise<void> 
    {
        const callback = await this.rwtMode.getNamedCallbackFromName("init").callback();
        debugPrint("ExampleVM: " + callback);
        const dataForNamed = this.namedState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForExampleVM.exception:
                return callbackWException(dataForNamed.getArrayWhereSwitchAndTwoElementsParameterExceptionController);
            case EnumDataForExampleVM.fourHundredOneWYouMustSpecifyAuthorization:
                return callbackWFourHundredOneWYouMustSpecifyAuthorization();
            case EnumDataForExampleVM.fourHundredOneWTokenIsNotCorrect:
                return callbackWFourHundredOneWTokenIsNotCorrect();
            case EnumDataForExampleVM.success:
                return callbackWSuccess(dataForNamed.getJSON);
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
        const isWhereEqualsNullParameterAuthorization = this.namedState.getDataForNamed.isWhereEqualsNullParameterAuthorization();
        if(isWhereEqualsNullParameterAuthorization) {
            return this.firstQQInitTestCallbackQQIsWhereEqualsNullParameterAuthorization();
        }
        const isWhereNotEqualsTokenByAPIParameterAuthorization = this.namedState.getDataForNamed.isWhereNotEqualsTokenByAPIParameterAuthorization();
        if(isWhereNotEqualsTokenByAPIParameterAuthorization) {
            return this.firstQQInitTestCallbackQQIsWhereNotEqualsTokenByAPIParameterAuthorization();
        }
        return KeysSuccessUtility.sUCCESS;
    }

    private async firstQQInitTestCallbackQQIsWhereEqualsNullParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWYouMustSpecifyAuthorization = true;
        return KeysExceptionUtility.exampleVMQQFirstQQInitTestCallbackQQIsWhereEqualsNullParameterAuthorization;
    }

    private async firstQQInitTestCallbackQQIsWhereNotEqualsTokenByAPIParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWTokenIsNotCorrect = true;
        return KeysExceptionUtility.exampleVMQQFirstQQInitTestCallbackQQIsWhereNotEqualsTokenByAPIParameterAuthorization;
    }
}