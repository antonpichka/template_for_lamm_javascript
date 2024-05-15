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

    public constructor(
        authorization: string,
        callbackWException: (list: Array<any>) => void,
        callbackWFourHundredOneWYouMustSpecifyAuthorization: () => void,
        callbackWFourHundredOneWTokenIsNotCorrect: () => void,
        callbackWSuccess: (json: {}) => void) 
    {
        this.namedState = new DefaultState<DataForExampleVM>(new DataForExampleVM(false,authorization,false,false));
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
                    const isWhereEqualsNullParameterAuthorization = this.namedState.getDataForNamed.isWhereEqualsNullParameterAuthorization();
                    if(isWhereEqualsNullParameterAuthorization) {
                        return this.firstQQInitQQIsWhereEqualsNullParameterAuthorization();
                    }
                    const isWhereNotEqualsTokenByAPIParameterAuthorization = this.namedState.getDataForNamed.isWhereNotEqualsTokenByAPIParameterAuthorization();
                    if(isWhereNotEqualsTokenByAPIParameterAuthorization) {
                        return this.firstQQInitQQIsWhereNotEqualsTokenByAPIParameterAuthorization();
                    }
                    return KeysSuccessUtility.sUCCESS;
                }),
            ]
        );
        this.initWBuild(callbackWException,callbackWFourHundredOneWYouMustSpecifyAuthorization,callbackWFourHundredOneWTokenIsNotCorrect,callbackWSuccess);
     }
     
     private async initWBuild(
        callbackWException: (list: Array<any>) => void,
        callbackWFourHundredOneWYouMustSpecifyAuthorization: () => void,
        callbackWFourHundredOneWTokenIsNotCorrect: () => void,
        callbackWSuccess: (json: {}) => void): Promise<void> 
     {
        const result = await this.rwtMode.getNamedCallbackFromName("init").callback();
        debugPrint("ExampleVM: " + result);
        const dataForNamed = this.namedState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForExampleVM.exception:
                callbackWException(dataForNamed.getArrayWhereSwitchAndTwoElementsParameterExceptionController);
                break;
            case EnumDataForExampleVM.fourHundredOneWYouMustSpecifyAuthorization:
                callbackWFourHundredOneWYouMustSpecifyAuthorization();
                break;
            case EnumDataForExampleVM.fourHundredOneWTokenIsNotCorrect:
                callbackWFourHundredOneWTokenIsNotCorrect();
                break;
            case EnumDataForExampleVM.success:
                callbackWSuccess(dataForNamed.getJSON);
                break;
            default:
                break;      
        }
    }

    private async firstQQInitQQIsWhereEqualsNullParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWYouMustSpecifyAuthorization = true;
        return KeysExceptionUtility.exampleVMQQFirstQQInitQQIsWhereEqualsNullParameterAuthorization;
    }

    private async firstQQInitQQIsWhereNotEqualsTokenByAPIParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWTokenIsNotCorrect = true;
        return KeysExceptionUtility.exampleVMQQFirstQQInitQQIsWhereNotEqualsTokenByAPIParameterAuthorization;
    }
}