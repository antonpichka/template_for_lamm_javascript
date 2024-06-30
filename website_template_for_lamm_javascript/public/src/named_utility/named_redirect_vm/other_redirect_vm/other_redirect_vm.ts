import { BaseModelRepository, BaseNamedState, DefaultState, EnumRWTMode, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForOtherRedirectVM } from "./enum_data_for_other_redirect_vm";
import { DataForOtherRedirectVM } from "./data_for_other_redirect_vm";
import { ReadyDataUtility } from "../../ready_data_utility";

export class OtherRedirectVM {
    // ModelRepository
    // NamedUtility
    
    // NamedStreamWState
    private readonly namedState: BaseNamedState<DataForOtherRedirectVM>;

    public constructor() {
        BaseModelRepository.enumRWTMode = EnumRWTMode.test;
        this.namedState = new DefaultState<DataForOtherRedirectVM>(new DataForOtherRedirectVM(false));
    }
     
    public async initWBuild(
        callbackWException: () => void,
        callbackWSuccess: () => void): Promise<void>
    {
        const firstRequest= await this.firstRequest();
        debugPrint("OtherRedirectVM: " + firstRequest);
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

    private async firstRequest(): Promise<string> {
        return ReadyDataUtility.success;
    }
}