import { debugPrint } from "library_architecture_mvvm_modify_javascript";
import { NotFoundViewModel } from "./not_found_view_model";
import { TestNotFoundViewModel } from "./test_not_found_view_model";
import { EnumDataForNotFoundView} from "./enum_data_for_not_found_view"

class NotFoundView {
    /// RELEASE CODE
    private readonly viewModel: NotFoundViewModel;
    /// TEST CODE
    // private readonly viewModel: TestNotFoundViewModel;

    public constructor() {
        /// RELEASE CODE
        this.viewModel = new NotFoundViewModel();
        /// TEST CODE
        // this.viewModel = new TestNotFoundViewModel();
        this.initParameterViewModel();
        this.buildParameterViewModel();
    }

    private async initParameterViewModel(): Promise<void> {
        this.viewModel.listenStreamDataForNamedFromCallbackParameterNamedStreamWState((data) => {
            this.buildParameterViewModel(); 
        });
        const result = await this.viewModel.init();
        debugPrint("NotFoundView: " + result);
        this.viewModel.notifyStreamDataForNamedParameterNamedStreamWState();
    }

    private buildParameterViewModel(): void {
        const dataForNamedParameterNamedStreamWState = this.viewModel.getDataForNamedParameterNamedStreamWState;
        switch(dataForNamedParameterNamedStreamWState.getEnumDataForNamed) {
            case EnumDataForNotFoundView.isLoading:
                break;
            case EnumDataForNotFoundView.exception:
                break;
            case EnumDataForNotFoundView.success:
                break;
            default:
                break;      
        }
    }
}

function main() {
    new NotFoundView();
}
main();