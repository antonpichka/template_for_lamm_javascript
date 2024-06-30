import { BaseModelRepository, BaseNamedStreamWState, DefaultStreamWState, EnumRWTMode, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForOtherVM } from "./enum_data_for_other_vm";
import { DataForOtherVM } from "./data_for_other_vm";
import { ReadyDataUtility } from "../../named_utility/ready_data_utility";

class OtherVM {
    // ModelRepository
    // NamedUtility
    
    // NamedStreamWState
    private readonly namedStreamWState: BaseNamedStreamWState<DataForOtherVM>;

    public constructor() {
        BaseModelRepository.enumRWTMode = EnumRWTMode.test;
        this.namedStreamWState = new DefaultStreamWState<DataForOtherVM>(new DataForOtherVM(true));
        this.init();
        this.build();
    }

    private async init(): Promise<void> {
        this.namedStreamWState.listenStreamDataForNamedFromCallback((_data) => {
            this.build();
        });
        const firstRequest = await this.firstRequest();
        debugPrint("OtherVM: " + firstRequest);
        this.namedStreamWState.notifyStreamDataForNamed();
    }

    private build(): void {
        const dataForNamed = this.namedStreamWState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForOtherVM.isLoading:
                document.getElementById("pMessage").innerText = "Cringe";
                break;
            case EnumDataForOtherVM.exception:
                document.getElementById("pMessage").innerText = dataForNamed.exceptionController.getKeyParameterException;
                break;
            case EnumDataForOtherVM.success:
                document.getElementById("pMessage").innerText = "OtherVM";
                break;
            default:
                break;      
        }
    }

    private async firstRequest(): Promise<string> {
        return ReadyDataUtility.success;
    }
}
new OtherVM();