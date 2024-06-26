import { BaseNamedStreamWState, DefaultStreamWState, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForNotFoundVM} from "./enum_data_for_not_found_vm"
import { DataForNotFoundVM } from "./data_for_not_found_vm";
import { ReadyDataUtility } from "../../named_utility/ready_data_utility";

class NotFoundVM {
    // ModelRepository
    // NamedUtility
    
    // NamedStreamWState
    private readonly namedStreamWState: BaseNamedStreamWState<DataForNotFoundVM>;

    public constructor() {
        this.namedStreamWState = new DefaultStreamWState<DataForNotFoundVM>(new DataForNotFoundVM(true));
        this.init();
        this.build();
    }

    private async init(): Promise<void> {
        this.namedStreamWState.listenStreamDataForNamedFromCallback((_data) => {
            this.build();
        });
        const firstRequest= await this.firstRequest();
        debugPrint("NotFoundVM: " + firstRequest);
        this.namedStreamWState.notifyStreamDataForNamed();
    }

    private build(): void {
        const dataForNamed = this.namedStreamWState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForNotFoundVM.isLoading:
                break;
            case EnumDataForNotFoundVM.exception:
                break;
            case EnumDataForNotFoundVM.success:
                break;
            default:
                break;      
        }
    }

    private async firstRequest(): Promise<string> {
        return ReadyDataUtility.success;
    }
}
new NotFoundVM();