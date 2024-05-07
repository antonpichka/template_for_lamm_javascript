import { debugPrint } from "library_architecture_mvvm_modify_javascript";
import { OtherViewModel } from "./other_view_model";
import { TestOtherViewModel } from "./test_other_view_model";
import { EnumDataForOtherView } from "./enum_data_for_other_view";

class OtherView {
    /// RELEASE CODE
    // private readonly viewModel: OtherViewModel;
    /// TEST CODE
    private readonly viewModel: TestOtherViewModel;

    public constructor() {
        /// RELEASE CODE
        // this.viewModel = new OtherViewModel();
        /// TEST CODE
        this.viewModel = new TestOtherViewModel();
        this.initParameterViewModel();
        this.buildParameterViewModel();
    }

    private async initParameterViewModel(): Promise<void> {
        this.viewModel.listenStreamDataForNamedFromCallbackParameterNamedStreamWState((data) => {
            this.buildParameterViewModel(); 
        });
        const result = await this.viewModel.init();
        debugPrint("OtherView: " + result);
        this.viewModel.notifyStreamDataForNamedParameterNamedStreamWState();
    }

    private buildParameterViewModel(): void {
        const dataForNamedParameterNamedStreamWState = this.viewModel.getDataForNamedParameterNamedStreamWState;
        switch(dataForNamedParameterNamedStreamWState.getEnumDataForNamed) {
            case EnumDataForOtherView.isLoading:
                document.getElementById("pMessage").innerText = "Cringe";
                break;
            case EnumDataForOtherView.exception:
                document.getElementById("pMessage").innerText = dataForNamedParameterNamedStreamWState.exceptionController.getKeyParameterException;
                break;
            case EnumDataForOtherView.success:
                document.getElementById("pMessage").innerText = "OtherView";
                break;
            default:
                break;      
        }
    }
}

function main() {
    new OtherView();
}
main();