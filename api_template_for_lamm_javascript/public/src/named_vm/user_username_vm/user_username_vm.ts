import { BaseNamedState, DefaultState, EnumRWTMode, ExceptionController, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForUserUsernameVM } from "./enum_data_for_user_username_vm";
import { DataForUserUsernameVM } from "./data_for_user_username_vm";
import { User } from "../../model/user/user";
import { KeysExceptionUtility } from "../../named_utility/keys_exception_utility";
import { ReadyDataUtility } from "../../named_utility/ready_data_utility";
import { UserRepository } from "../../model_repository/user_repository/user_repository";

export class UserUsernameVM {
    // ModelRepository
    private readonly userRepository = new UserRepository(EnumRWTMode.test);

    // NamedUtility
    
    // NamedStreamWState
    private readonly namedState: BaseNamedState<DataForUserUsernameVM>;

     public constructor(
        authorization: string, 
        username: string) 
    {
        this.namedState = new DefaultState<DataForUserUsernameVM>(new DataForUserUsernameVM(false,authorization,username,new User("",""),false,false));
     }
     
     public async initWBuild(
        callbackWException: (list: Array<any>) => void,
        callbackWFourHundredOneWYouMustSpecifyAuthorization: () => void,
        callbackWFourHundredOneWTokenIsNotCorrect: () => void,
        callbackWSuccess: (json: {}) => void): Promise<void> 
     {
        const firstRequest = await this.firstRequest();
        debugPrint("UserUsernameVM: " + firstRequest);
        const dataForNamed = this.namedState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForUserUsernameVM.exception:
                return callbackWException(dataForNamed.getArrayWhereSwitchAndTwoElementsParameterExceptionController);
            case EnumDataForUserUsernameVM.fourHundredOneWYouMustSpecifyAuthorization:
                return callbackWFourHundredOneWYouMustSpecifyAuthorization();
            case EnumDataForUserUsernameVM.fourHundredOneWTokenIsNotCorrect:
                return callbackWFourHundredOneWTokenIsNotCorrect();
            case EnumDataForUserUsernameVM.success:
                return callbackWSuccess(dataForNamed.getJSONParameterUser);
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
        const getUserFromUsernameParameterOne = await this.userRepository.getUserFromUsernameParameterOne(this.namedState.getDataForNamed.username);
        if(getUserFromUsernameParameterOne.exceptionController.isWhereNotEqualsNullParameterException()) {
            return this.firstQQFirstRequestQQGetUserFromUsernameParameterOne(getUserFromUsernameParameterOne.exceptionController);
        }
        this.namedState.getDataForNamed.user = getUserFromUsernameParameterOne.parameter.getClone;
        return ReadyDataUtility.success;
    }

    private async firstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWYouMustSpecifyAuthorization = true;
        return KeysExceptionUtility.userUsernameVMQQFirstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization;
    }

    private async firstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWTokenIsNotCorrect = true;
        return KeysExceptionUtility.userUsernameVMQQFirstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization;
    }

    private async firstQQFirstRequestQQGetUserFromUsernameParameterOne(exceptionController: ExceptionController): Promise<string> {
        this.namedState.getDataForNamed.exceptionController = exceptionController;
        return exceptionController.getKeyParameterException;
    }
}