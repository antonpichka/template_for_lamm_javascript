import { BaseNamedState, DefaultState, EnumRWTMode, NamedCallback, RWTMode, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForUserUsernameVM } from "./enum_data_for_user_username_vm";
import { DataForUserUsernameVM } from "./data_for_user_username_vm";
import { KeysSuccessUtility } from "../../named_utility/keys_success_utility";
import { User } from "../../model/user/user";
import { KeysExceptionUtility } from "../../named_utility/keys_exception_utility";

export class UserUsernameVM {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility
    
    // Main objects
    private readonly namedState: BaseNamedState<DataForUserUsernameVM>;
    private readonly rwtMode: RWTMode;

     public constructor(
        authorization: string, 
        username: string, 
        callbackWException: (list: Array<any>) => void,
        callbackWFourHundredOneWYouMustSpecifyAuthorization: () => void,
        callbackWFourHundredOneWTokenIsNotCorrect: () => void,
        callbackWSuccess: (json: {}) => void) 
    {
        this.namedState = new DefaultState<DataForUserUsernameVM>(new DataForUserUsernameVM(false,authorization,username,new User("",""),false,false));
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
                    // Simulation get "User" from "username"
                    const user = new User("62d2ff5d-af0f-46bd-87db-990284b140e2",this.namedState.getDataForNamed.username);
                    await new Promise(resolve => setTimeout(resolve,1000));
                    this.namedState.getDataForNamed.user = user.getClone;
                    return KeysSuccessUtility.sUCCESS;
                }),
            ]
        );
        this.initWBuild(callbackWException,callbackWFourHundredOneWYouMustSpecifyAuthorization,callbackWFourHundredOneWTokenIsNotCorrect,callbackWSuccess);
     }
     
     private async initWBuild(
        callbackWException: (list: Array<any>) => void,
        callbackWFourHundredOneWYouMustSpecifyAuthorization: () => void,
        callbackWFourHundredOneWTokenIsNotCorrect: () => void,
        callbackWSuccess: (json: {}) => void): Promise<void> 
     {
        const result = await this.rwtMode.getNamedCallbackFromName("init").callback();
        debugPrint("UserUsernameVM: " + result);
        const dataForNamed = this.namedState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForUserUsernameVM.exception:
                callbackWException(dataForNamed.getArrayWhereSwitchAndTwoElementsParameterExceptionController);
                break;
            case EnumDataForUserUsernameVM.fourHundredOneWYouMustSpecifyAuthorization:
                callbackWFourHundredOneWYouMustSpecifyAuthorization();
                break;
            case EnumDataForUserUsernameVM.fourHundredOneWTokenIsNotCorrect:
                callbackWFourHundredOneWTokenIsNotCorrect();
                break;
            case EnumDataForUserUsernameVM.success:
                callbackWSuccess(dataForNamed.getJSONParameterUser);
                break;
            default:
                break;      
        }
    }

    private async firstQQInitQQIsWhereEqualsNullParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWYouMustSpecifyAuthorization = true;
        return KeysExceptionUtility.userVMQQFirstQQInitQQIsWhereEqualsNullParameterAuthorization;
    }

    private async firstQQInitQQIsWhereNotEqualsTokenByAPIParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWTokenIsNotCorrect = true;
        return KeysExceptionUtility.userVMQQFirstQQInitQQIsWhereNotEqualsTokenByAPIParameterAuthorization;
    }
}