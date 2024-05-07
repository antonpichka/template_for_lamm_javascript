import { debugPrint } from "library_architecture_mvvm_modify_javascript";
import { LoginViewModelCutDown } from "./login_view_model_cut_down";
import { TestLoginViewModelCutDown } from "./test_login_view_model_cut_down";
import { EnumDataForLoginView } from "./enum_data_for_login_view";

export class LoginView {
     /// RELEASE CODE
     // private readonly viewModel: LoginViewModelCutDown;
     /// TEST CODE
     private readonly viewModel: TestLoginViewModelCutDown;
 
     public constructor(
        authorization: string, 
        username: string, 
        password: string, 
        callbackWException: () => void,
        callbackWFourHundredOneWYouMustSpecifyAuthorization: () => void,
        callbackWFourHundredOneWTokenIsNotCorrect: () => void,
        callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax: () => void,
        callbackWFourHundredNineWSuchDataIsAlreadyInTheDatabase: () => void,
        callbackWSuccess: () => void) 
    {
         /// RELEASE CODE
         // this.viewModel = new LoginViewModelCutDown(authorization,username,password);
         /// TEST CODE
         this.viewModel = new TestLoginViewModelCutDown(authorization,username,password);
         this.initWBuildParameterViewModel(callbackWException,callbackWFourHundredOneWYouMustSpecifyAuthorization,callbackWFourHundredOneWTokenIsNotCorrect,callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax,callbackWFourHundredNineWSuchDataIsAlreadyInTheDatabase,callbackWSuccess);
     }
     
     private async initWBuildParameterViewModel(
        callbackWException: () => void, 
        callbackWFourHundredOneWYouMustSpecifyAuthorization: () => void,
        callbackWFourHundredOneWTokenIsNotCorrect: () => void,
        callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax: () => void,
        callbackWFourHundredNineWSuchDataIsAlreadyInTheDatabase: () => void,
        callbackWSuccess: () => void): Promise<void> 
     {
        const result = await this.viewModel.init();
        debugPrint("LoginView: " + result);
        const dataForNamedParameterNamedState = this.viewModel.getDataForNamedParameterNamedState;
        switch(dataForNamedParameterNamedState.getEnumDataForNamed) {
            case EnumDataForLoginView.exception:
                callbackWException();
                break;
            case EnumDataForLoginView.fourHundredOneWYouMustSpecifyAuthorization:
                callbackWFourHundredOneWYouMustSpecifyAuthorization();
                break;
            case EnumDataForLoginView.fourHundredOneWTokenIsNotCorrect:
                callbackWFourHundredOneWTokenIsNotCorrect();
                break;
            case EnumDataForLoginView.fourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax:
                callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax();
                break;
            case EnumDataForLoginView.fourHundredNineWSuchDataIsAlreadyInTheDatabase:
                callbackWFourHundredNineWSuchDataIsAlreadyInTheDatabase();
                break;
            case EnumDataForLoginView.success:
                callbackWSuccess();
                break;
            default:
                break;      
        }
    }
}