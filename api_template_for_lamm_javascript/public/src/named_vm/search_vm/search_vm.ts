import { BaseNamedState, DefaultState, EnumRWTMode, NamedCallback, RWTMode, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { DataForSearchVM } from "./data_for_search_vm";
import { KeysSuccessUtility } from "../../named_utility/keys_success_utility";
import { EnumDataForSearchVM } from "./enum_data_for_search_vm";
import { ListUser } from "../../model/user/list_user";
import { User } from "../../model/user/user";
import { KeysExceptionUtility } from "../../named_utility/keys_exception_utility";

export class SearchVM {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility
    
    // Main objects
    private readonly namedState: BaseNamedState<DataForSearchVM>;
    private readonly rwtMode: RWTMode;

    public constructor(
        authorization: string,
        q: string,
        callbackWException: (list: Array<any>) => void,
        callbackWFourHundredOneWYouMustSpecifyAuthorization: () => void,
        callbackWFourHundredOneWTokenIsNotCorrect: () => void,
        callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax: () => void,
        callbackWSuccess: (json: {}) => void)
    {
        this.namedState = new DefaultState<DataForSearchVM>(new DataForSearchVM(false,authorization,q,new ListUser([])));
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
                    const isWhereEqualsNullWEmptyParameterQ = this.namedState.getDataForNamed.isWhereEqualsNullWEmptyParameterQ();
                    if(isWhereEqualsNullWEmptyParameterQ) {
                        return this.firstQQInitQQIsWhereEqualsNullWEmptyParameterQ();
                    }
                    // Simulation get "ListUser" from "q"
                    const listUser = new ListUser(
                        [
                            new User("b5f9b56a-be60-4732-ba75-e8f4baac8c39",this.namedState.getDataForNamed.q),
                            new User("d1fe0703-5a4a-469e-9007-734af71224a6",this.namedState.getDataForNamed.q + "w")
                        ]);  
                    await new Promise(resolve => setTimeout(resolve,1000));
                    this.namedState.getDataForNamed.listUser = listUser.getClone;
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
        callbackWSuccess: (json: {}) => void): Promise<void> 
    {
        const result = await this.rwtMode.getNamedCallbackFromName("init").callback();
        debugPrint("SearchVM: " + result);  
        const dataForNamed = this.namedState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForSearchVM.exception:
                callbackWException(dataForNamed.getArrayWhereSwitchAndTwoElementsParameterExceptionController);
                break;
            case EnumDataForSearchVM.fourHundredOneWYouMustSpecifyAuthorization:
                callbackWFourHundredOneWYouMustSpecifyAuthorization();
                break;
            case EnumDataForSearchVM.fourHundredOneWTokenIsNotCorrect:
                callbackWFourHundredOneWTokenIsNotCorrect();
                break;
            case EnumDataForSearchVM.fourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax:
                callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax();
                break;
            case EnumDataForSearchVM.success:
                callbackWSuccess(dataForNamed.getJSONParameterListUser);
                break;
            default:
                break;      
        }
    }

    private async firstQQInitQQIsWhereEqualsNullParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWYouMustSpecifyAuthorization = true;
        return KeysExceptionUtility.searchVMQQFirstQQInitQQIsWhereEqualsNullParameterAuthorization;
    }

    private async firstQQInitQQIsWhereNotEqualsTokenByAPIParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWTokenIsNotCorrect = true;
        return KeysExceptionUtility.searchVMQQFirstQQInitQQIsWhereNotEqualsTokenByAPIParameterAuthorization;
    }

    private async firstQQInitQQIsWhereEqualsNullWEmptyParameterQ(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax = true;
        return KeysExceptionUtility.searchVMQQFirstQQInitQQIsWhereEqualsNullWEmptyParameterQ;
    }
}