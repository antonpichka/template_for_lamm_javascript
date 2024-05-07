import { debugPrint } from "library_architecture_mvvm_modify_javascript";
import { OtherRedirectViewModelCutDown } from "./other_redirect_view_model_cut_down";
import { TestOtherRedirectViewModelCutDown } from "./test_other_redirect_view_model_cut_down";
import { EnumDataForOtherRedirectView } from "./enum_data_for_other_redirect_view";

export class OtherRedirectView {
     /// RELEASE CODE
     // private readonly viewModel: OtherRedirectViewModelCutDown;
     /// TEST CODE
     private readonly viewModel: TestOtherRedirectViewModelCutDown;
 
     public constructor(callbackWException: () => void,callbackWSuccess: () => void) {
         /// RELEASE CODE
         // this.viewModel = new OtherRedirectViewModelCutDown();
         /// TEST CODE
         this.viewModel = new TestOtherRedirectViewModelCutDown();
         this.initWBuildParameterViewModel(callbackWException,callbackWSuccess);
     }
     
     private async initWBuildParameterViewModel(callbackWException: () => void,callbackWSuccess: () => void): Promise<void> {
        const result = await this.viewModel.init();
        debugPrint("OtherRedirectView: " + result);
        const dataForNamedParameterNamedState = this.viewModel.getDataForNamedParameterNamedState;
        switch(dataForNamedParameterNamedState.getEnumDataForNamed) {
            case EnumDataForOtherRedirectView.exception:
                callbackWException();
                break;
            case EnumDataForOtherRedirectView.success:
                callbackWSuccess();
                break;
            default:
                break;      
        }
    }
}