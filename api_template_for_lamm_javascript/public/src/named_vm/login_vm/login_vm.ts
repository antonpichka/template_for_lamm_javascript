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
        password: string) 
    {
        this.namedState = new DefaultState<DataForLoginVM>(new DataForLoginVM(false,authorization,username,password,false,false,false));
        this.rwtMode = new RWTMode(
            EnumRWTMode.test,
            [
                new NamedCallback("init",this.initReleaseCallback),
            ],
            [
                new NamedCallback("init",this.initTestCallback),
            ]
        );
    }
     
    public async initWBuild(
        callbackWException: (list: Array<any>) => void,
        callbackWFourHundredOneWYouMustSpecifyAuthorization: () => void,
        callbackWFourHundredOneWTokenIsNotCorrect: () => void,
        callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax: () => void,
        callbackWSuccess: () => void): Promise<void> 
    {
        const callback = await this.rwtMode.getNamedCallbackFromName("init").callback();
        debugPrint("LoginVM: " + callback);
        const dataForNamed = this.namedState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForLoginVM.exception:
                return callbackWException(dataForNamed.getArrayWhereSwitchAndTwoElementsParameterExceptionController);
            case EnumDataForLoginVM.fourHundredOneWYouMustSpecifyAuthorization:
                return callbackWFourHundredOneWYouMustSpecifyAuthorization();
            case EnumDataForLoginVM.fourHundredOneWTokenIsNotCorrect:
                return callbackWFourHundredOneWTokenIsNotCorrect();
            case EnumDataForLoginVM.fourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax:
                return callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax();
            case EnumDataForLoginVM.success:
                return callbackWSuccess();
            default:
                return;     
        }
    }

    public dispose(): void 
    {
        this.namedState.dispose();        
    }

    private initReleaseCallback = async (): Promise<string> => {
        await new Promise(resolve => setTimeout(resolve,1000));
        return KeysSuccessUtility.sUCCESS;
    }

    private initTestCallback = async (): Promise<string> => {
        const isWhereEqualsNullParameterAuthorization = this.namedState.getDataForNamed.isWhereEqualsNullParameterAuthorization();
        if(isWhereEqualsNullParameterAuthorization) {
            return this.firstQQInitTestCallbackQQIsWhereEqualsNullParameterAuthorization();
        }
        const isWhereNotEqualsTokenByAPIParameterAuthorization = this.namedState.getDataForNamed.isWhereNotEqualsTokenByAPIParameterAuthorization();
        if(isWhereNotEqualsTokenByAPIParameterAuthorization) {
            return this.firstQQInitTestCallbackQQIsWhereNotEqualsTokenByAPIParameterAuthorization();
        }
        const isWhereEqualsNullWEmptyParametersUsernameAndPassword = this.namedState.getDataForNamed.isWhereEqualsNullWEmptyParametersUsernameAndPassword();
        if(isWhereEqualsNullWEmptyParametersUsernameAndPassword) {
            return this.firstQQInitTestCallbackQQIsWhereEqualsNullWEmptyParametersUsernameAndPassword();
        }
        // Simulation get "User" from "username"
        const user = new User("62d2ff5d-af0f-46bd-87db-990284b140e2",this.namedState.getDataForNamed.username);
        await new Promise(resolve => setTimeout(resolve,1000));
        // Simulation get "SecurityUser" from "uniqueIdByUser","password"
        new SecurityUser(user.uniqueId,this.namedState.getDataForNamed.password);
        await new Promise(resolve => setTimeout(resolve,1000));
        return KeysSuccessUtility.sUCCESS;
    }

    private async firstQQInitTestCallbackQQIsWhereEqualsNullParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWYouMustSpecifyAuthorization = true;
        return KeysExceptionUtility.loginVMQQFirstQQInitTestCallbackQQIsWhereEqualsNullParameterAuthorization;
    }

    private async firstQQInitTestCallbackQQIsWhereNotEqualsTokenByAPIParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWTokenIsNotCorrect = true;
        return KeysExceptionUtility.loginVMQQFirstQQInitTestCallbackQQIsWhereNotEqualsTokenByAPIParameterAuthorization;
    }

    private async firstQQInitTestCallbackQQIsWhereEqualsNullWEmptyParametersUsernameAndPassword(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax = true;
        return KeysExceptionUtility.loginVMQQFirstQQInitTestCallbackQQIsWhereEqualsNullWEmptyParametersUsernameAndPassword;
    }
}