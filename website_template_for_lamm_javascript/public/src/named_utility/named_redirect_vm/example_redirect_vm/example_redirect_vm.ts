import { BaseModelRepository, BaseNamedState, DefaultState, EnumRWTMode, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForExampleRedirectVM } from "./enum_data_for_example_redirect_vm";
import { DataForExampleRedirectVM } from "./data_for_example_redirect_vm";
import { ReadyDataUtility } from "../../ready_data_utility";

export class ExampleRedirectVM {
    // ModelRepository
    // NamedUtility
    
    // NamedStreamWState
    private readonly namedState: BaseNamedState<DataForExampleRedirectVM>;

    public constructor() {
        BaseModelRepository.enumRWTMode = EnumRWTMode.test;
        this.namedState = new DefaultState<DataForExampleRedirectVM>(new DataForExampleRedirectVM(false));
    }
     
    public async initWBuild(
        callbackWException: () => void,
        callbackWSuccess: () => void): Promise<void>
    {
        const firstRequest= await this.firstRequest();
        debugPrint("ExampleRedirectVM: " + firstRequest);
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

    private async firstRequest(): Promise<string> {
        return ReadyDataUtility.success;
    }
}