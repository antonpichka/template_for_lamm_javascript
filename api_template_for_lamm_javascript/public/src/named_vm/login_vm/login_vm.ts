import { BaseNamedState, DefaultState, EnumRWTMode, ExceptionController, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForLoginVM } from "./enum_data_for_login_vm";
import { DataForLoginVM } from "./data_for_login_vm";
import { KeysExceptionUtility } from "../../named_utility/keys_exception_utility";
import { ReadyDataUtility } from "../../named_utility/ready_data_utility";
import { UserRepository } from "../../model_repository/user_repository/user_repository";
import { SecurityUserRepository } from "../../model_repository/security_user_repository/security_user_repository";

export class LoginVM {
    // ModelRepository
    private readonly userRepository = new UserRepository(EnumRWTMode.test);
    private readonly securityUserRepository = new SecurityUserRepository(EnumRWTMode.test);

    // NamedUtility
    
    // NamedStreamWState
    private readonly namedState: BaseNamedState<DataForLoginVM>;

    public constructor(
        authorization: string, 
        username: string, 
        password: string) 
    {
        this.namedState = new DefaultState<DataForLoginVM>(new DataForLoginVM(false,authorization,username,password,false,false,false));
    }
     
    public async initWBuild(
        callbackWException: (list: Array<any>) => void,
        callbackWFourHundredOneWYouMustSpecifyAuthorization: () => void,
        callbackWFourHundredOneWTokenIsNotCorrect: () => void,
        callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax: () => void,
        callbackWSuccess: () => void): Promise<void> 
    {
        const firstRequest = await this.firstRequest();
        debugPrint("LoginVM: " + firstRequest);
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

    private async firstRequest(): Promise<string> {
        const isWhereEqualsNullParameterAuthorization = this.namedState.getDataForNamed.isWhereEqualsNullParameterAuthorization();
        if(isWhereEqualsNullParameterAuthorization) {
            return this.firstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization();
        }
        const isWhereNotEqualsTokenByAPIParameterAuthorization = this.namedState.getDataForNamed.isWhereNotEqualsTokenByAPIParameterAuthorization();
        if(isWhereNotEqualsTokenByAPIParameterAuthorization) {
            return this.firstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization();
        }
        const isWhereEqualsNullWEmptyParametersUsernameAndPassword = this.namedState.getDataForNamed.isWhereEqualsNullWEmptyParametersUsernameAndPassword();
        if(isWhereEqualsNullWEmptyParametersUsernameAndPassword) {
            return this.firstQQFirstRequestQQIsWhereEqualsNullWEmptyParametersUsernameAndPassword();
        }
        const getUserFromUsernameParameterOne = await this.userRepository.getUserFromUsernameParameterOne(this.namedState.getDataForNamed.username);
        if(getUserFromUsernameParameterOne.exceptionController.isWhereNotEqualsNullParameterException()) {
            return this.firstQQFirstRequestQQGetUserFromUsernameParameterOne(getUserFromUsernameParameterOne.exceptionController);
        }
        const getSecurityUserFromUniqueIdByUserAndPasswordParameterOne = await this.securityUserRepository.getSecurityUserFromUniqueIdByUserAndPasswordParameterOne(getUserFromUsernameParameterOne.parameter.uniqueId, this.namedState.getDataForNamed.password);
        if(getSecurityUserFromUniqueIdByUserAndPasswordParameterOne.exceptionController.isWhereNotEqualsNullParameterException()) {
            return this.firstQQFirstRequestQQGetSecurityUserFromUniqueIdByUserAndPasswordParameterOne(getSecurityUserFromUniqueIdByUserAndPasswordParameterOne.exceptionController);
        }
        return ReadyDataUtility.success;
    }

    private async firstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWYouMustSpecifyAuthorization = true;
        return KeysExceptionUtility.loginVMQQFirstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization;
    }

    private async firstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWTokenIsNotCorrect = true;
        return KeysExceptionUtility.loginVMQQFirstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization;
    }

    private async firstQQFirstRequestQQIsWhereEqualsNullWEmptyParametersUsernameAndPassword(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax = true;
        return KeysExceptionUtility.loginVMQQFirstQQFirstRequestQQIsWhereEqualsNullWEmptyParametersUsernameAndPassword;
    }

    private async firstQQFirstRequestQQGetUserFromUsernameParameterOne(exceptionController: ExceptionController): Promise<string> {
        this.namedState.getDataForNamed.exceptionController = exceptionController;
        return exceptionController.getKeyParameterException;
    }

    private async firstQQFirstRequestQQGetSecurityUserFromUniqueIdByUserAndPasswordParameterOne(exceptionController: ExceptionController): Promise<string> {
        this.namedState.getDataForNamed.exceptionController = exceptionController;
        return exceptionController.getKeyParameterException;
    }
}