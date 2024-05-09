import { debugPrint } from "library_architecture_mvvm_modify_javascript";
import { SearchViewModelCutDown } from "./search_view_model_cut_down";
import { TestSearchViewModelCutDown } from "./test_search_view_model_cut_down";

class SearchView {
    /// RELEASE CODE
    // private readonly viewModel: SearchViewModelCutDown;
    /// TEST CODE
    private readonly viewModel: TestSearchViewModelCutDown;

    public constructor(
        authorization: string,
        q: string,
        callbackWException: () => void,
        callbackWFourHundredOneWYouMustSpecifyAuthorization: () => void,
        callbackWFourHundredOneWTokenIsNotCorrect: () => void,
        callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax: () => void,
        callbackWSuccess: () => void)
    {
        /// RELEASE CODE
        // this.viewModel = new SearchViewModelCutDown(authorization,q);
        /// TEST CODE
        this.viewModel = new TestSearchViewModelCutDown(authorization,q);
        this.initWBuildParameterViewModel(callbackWException,callbackWFourHundredOneWYouMustSpecifyAuthorization,callbackWFourHundredOneWTokenIsNotCorrect,callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax,callbackWSuccess);
    }

    private async initWBuildParameterViewModel(
        callbackWException: () => void,
        callbackWFourHundredOneWYouMustSpecifyAuthorization: () => void,
        callbackWFourHundredOneWTokenIsNotCorrect: () => void,
        callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax: () => void,
        callbackWSuccess: () => void): Promise<void>
    {
        const result = await this.viewModel.init();
        debugPrint("SearchView: " + result);
        const dataForNamedParameterNamedState = this.viewModel.getDataForNamedParameterNamedState;
    }
}