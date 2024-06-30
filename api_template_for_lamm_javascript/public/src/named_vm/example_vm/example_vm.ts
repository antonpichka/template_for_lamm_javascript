import { BaseModelRepository, BaseNamedState, DefaultState, EnumRWTMode, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForExampleVM } from "./enum_data_for_example_vm";
import { DataForExampleVM } from "./data_for_example_vm";
import { KeysExceptionUtility } from "../../named_utility/keys_exception_utility";
import { ReadyDataUtility } from "../../named_utility/ready_data_utility";

export class ExampleVM {
    // ModelRepository
    // NamedUtility
    
    // NamedStreamWState
    private readonly namedState: BaseNamedState<DataForExampleVM>;

    public constructor(authorization: string) 
    {
        BaseModelRepository.enumRWTMode = EnumRWTMode.test;
        this.namedState = new DefaultState<DataForExampleVM>(new DataForExampleVM(false,authorization,false,false));
    }
     
    public async initWBuild(
        callbackWException: (list: Array<any>) => void,
        callbackWFourHundredOneWYouMustSpecifyAuthorization: () => void,
        callbackWFourHundredOneWTokenIsNotCorrect: () => void,
        callbackWSuccess: (json: {}) => void): Promise<void> 
    {
        const firstRequest = await this.firstRequest();
        debugPrint("ExampleVM: " + firstRequest);
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

    private async firstRequest(): Promise<string> {
        const isWhereEqualsNullParameterAuthorization = this.namedState.getDataForNamed.isWhereEqualsNullParameterAuthorization();
        if(isWhereEqualsNullParameterAuthorization) {
            return this.firstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization();
        }
        const isWhereNotEqualsTokenByAPIParameterAuthorization = this.namedState.getDataForNamed.isWhereNotEqualsTokenByAPIParameterAuthorization();
        if(isWhereNotEqualsTokenByAPIParameterAuthorization) {
            return this.firstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization();
        }
        return ReadyDataUtility.success;
    }

    private async firstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWYouMustSpecifyAuthorization = true;
        return KeysExceptionUtility.exampleVMQQFirstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization;
    }

    private async firstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWTokenIsNotCorrect = true;
        return KeysExceptionUtility.exampleVMQQFirstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization;
    }
}