import { BaseNamedState, DefaultState, EnumRWTMode, NamedCallback, RWTMode, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForLoginVM } from "./enum_data_for_login_vm";
import { DataForLoginVM } from "./data_for_login_vm";
import { KeysSuccessUtility } from "../../named_utility/keys_success_utility";
import { User } from "../../model/user/user";
import { SecurityUser } from "../../model/security_user/security_user";
import { KeysExceptionUtility } from "../../named_utility/keys_exception_utility";

export class LoginVM {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility
    
    // Main objects
    private readonly namedState: BaseNamedState<DataForLoginVM>;
    private readonly rwtMode: RWTMode;

     public constructor(
        authorization: string, 
        username: string, 
        password: string, 
        callbackWException: (list: Array<any>) => void,
        callbackWFourHundredOneWYouMustSpecifyAuthorization: () => void,
        callbackWFourHundredOneWTokenIsNotCorrect: () => void,
        callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax: () => void,
        callbackWSuccess: () => void) 
    {
        this.namedState = new DefaultState<DataForLoginVM>(new DataForLoginVM(false,authorization,username,password,false,false,false));
        this.rwtMode = new RWTMode(
            EnumRWTMode.test,
            [
                new NamedCallback("init",async () => {
                    await new Promise(resolve => setTimeout(resolve,1000));
                    return KeysSuccessUtility.sUCCESS;
                }),
            ],
            [
                new NamedCallback("init",async () => {
                    const isWhereEqualsNullParameterAuthorization = this.namedState.getDataForNamed.isWhereEqualsNullParameterAuthorization();
                    if(isWhereEqualsNullParameterAuthorization) {
                        return this.firstQQInitQQIsWhereEqualsNullParameterAuthorization();
                    }
                    const isWhereNotEqualsTokenByAPIParameterAuthorization = this.namedState.getDataForNamed.isWhereNotEqualsTokenByAPIParameterAuthorization();
                    if(isWhereNotEqualsTokenByAPIParameterAuthorization) {
                        return this.firstQQInitQQIsWhereNotEqualsTokenByAPIParameterAuthorization();
                    }
                    const isWhereEqualsNullWEmptyParametersUsernameAndPassword = this.namedState.getDataForNamed.isWhereEqualsNullWEmptyParametersUsernameAndPassword();
                    if(isWhereEqualsNullWEmptyParametersUsernameAndPassword) {
                        return this.firstQQInitQQIsWhereEqualsNullWEmptyParametersUsernameAndPassword();
                    }
                    // Simulation get "User" from "username"
                    const user = new User("62d2ff5d-af0f-46bd-87db-990284b140e2",this.namedState.getDataForNamed.username);
                    await new Promise(resolve => setTimeout(resolve,1000));
                    // Simulation get "SecurityUser" from "uniqueIdByUser","password"
                    new SecurityUser(user.uniqueId,this.namedState.getDataForNamed.password);
                    await new Promise(resolve => setTimeout(resolve,1000));
                    return KeysSuccessUtility.sUCCESS;
                }),
            ]
        );
        this.initWBuild(callbackWException,callbackWFourHundredOneWYouMustSpecifyAuthorization,callbackWFourHundredOneWTokenIsNotCorrect,callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax,callbackWSuccess);
     }
     
     private async initWBuild(
        callbackWException: (list: Array<any>) => void,
        callbackWFourHundredOneWYouMustSpecifyAuthorization: () => void,
        callbackWFourHundredOneWTokenIsNotCorrect: () => void,
        callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax: () => void,
        callbackWSuccess: () => void): Promise<void> 
     {
        const result = await this.rwtMode.getNamedCallbackFromName("init").callback();
        debugPrint("LoginVM: " + result);
        const dataForNamed = this.namedState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForLoginVM.exception:
                callbackWException(dataForNamed.getArrayWhereSwitchAndTwoElementsParameterExceptionController);
                break;
            case EnumDataForLoginVM.fourHundredOneWYouMustSpecifyAuthorization:
                callbackWFourHundredOneWYouMustSpecifyAuthorization();
                break;
            case EnumDataForLoginVM.fourHundredOneWTokenIsNotCorrect:
                callbackWFourHundredOneWTokenIsNotCorrect();
                break;
            case EnumDataForLoginVM.fourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax:
                callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax();
                break;
            case EnumDataForLoginVM.success:
                callbackWSuccess();
                break;
            default:
                break;      
        }
    }

    private async firstQQInitQQIsWhereEqualsNullParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWYouMustSpecifyAuthorization = true;
        return KeysExceptionUtility.loginVMQQFirstQQInitQQIsWhereEqualsNullParameterAuthorization;
    }

    private async firstQQInitQQIsWhereNotEqualsTokenByAPIParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWTokenIsNotCorrect = true;
        return KeysExceptionUtility.loginVMQQFirstQQInitQQIsWhereNotEqualsTokenByAPIParameterAuthorization;
    }

    private async firstQQInitQQIsWhereEqualsNullWEmptyParametersUsernameAndPassword(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax = true;
        return KeysExceptionUtility.loginVMQQFirstQQInitQQIsWhereEqualsNullWEmptyParametersUsernameAndPassword;
    }
}