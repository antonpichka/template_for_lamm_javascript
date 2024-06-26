import { BaseNamedStreamWState, DefaultStreamWState, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForExampleVM } from "./enum_data_for_example_vm";
import { DataForExampleVM } from "./data_for_example_vm";
import { ReadyDataUtility } from "../../named_utility/ready_data_utility";

class ExampleVM {
    // ModelRepository
    // NamedUtility
    
    // NamedStreamWState
    private readonly namedStreamWState: BaseNamedStreamWState<DataForExampleVM>;

    public constructor() {
        this.namedStreamWState = new DefaultStreamWState<DataForExampleVM>(new DataForExampleVM(true));
        this.init();
        this.build();
    }

    private async init(): Promise<void> {
        this.namedStreamWState.listenStreamDataForNamedFromCallback((_data) => {
            this.build();
        }); 
        const firstRequest = await this.firstRequest();
        debugPrint("ExampleVM: " + firstRequest);
        this.namedStreamWState.notifyStreamDataForNamed();
    }

    private build(): void {
        const dataForNamed = this.namedStreamWState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForExampleVM.isLoading:
                break;
            case EnumDataForExampleVM.exception:
                break;
            case EnumDataForExampleVM.success:
                break;
            default:
                break;      
        }
    }

    private async firstRequest(): Promise<string> {
        return ReadyDataUtility.success;
    }
}
new ExampleVM();