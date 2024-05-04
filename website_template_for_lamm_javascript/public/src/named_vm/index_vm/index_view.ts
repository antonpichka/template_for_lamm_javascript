import { debugPrint } from "library_architecture_mvvm_modify_javascript";
import { IndexViewModel } from "./index_view_model";
import { EnumDataForIndexView } from "./enum_data_for_index_view";
import { TestIndexViewModel } from "./test_index_view_model";

class IndexView {
    /// RELEASE CODE
    private readonly viewModel: IndexViewModel;
    /// TEST CODE
    // private readonly viewModel: TestIndexViewModel;

    public constructor() {
        /// RELEASE CODE
        this.viewModel = new IndexViewModel();
        /// TEST CODE
        // this.viewModel = new TestIndexViewModel();
        this.initParameterViewModel();
        this.buildParameterViewModel();
    }

    private async initParameterViewModel(): Promise<void> {
        this.viewModel.listenStreamDataForNamedFromCallbackParameterNamedStreamWState((data) => {
            this.buildParameterViewModel(); 
        });
        const result = await this.viewModel.init();
        debugPrint("IndexView: " + result);
        this.viewModel.notifyStreamDataForNamedParameterNamedStreamWState();
    }

    private buildParameterViewModel(): void {
        const dataForNamedParameterNamedStreamWState = this.viewModel.getDataForNamedParameterNamedStreamWState;
        switch(dataForNamedParameterNamedStreamWState.getEnumDataForNamed) {
            case EnumDataForIndexView.isLoading:
                document.getElementById("loader").style.display = "block";
                document.getElementById("pMessage").hidden = true;
                break;
            case EnumDataForIndexView.exception:
                document.getElementById("loader").style.display = "none";
                document.getElementById("pMessage").hidden = false;
                document.getElementById("pMessage").innerText = dataForNamedParameterNamedStreamWState.exceptionController.getKeyParameterException;
                break;
            case EnumDataForIndexView.success:
                document.getElementById("loader").style.display = "none";
                document.getElementById("pMessage").hidden = false;
                document.getElementById("pMessage").innerText = "IndexView";
                break;
            default:
                break;      
        }
    }
}

function main() {
    new IndexView();
}
main();