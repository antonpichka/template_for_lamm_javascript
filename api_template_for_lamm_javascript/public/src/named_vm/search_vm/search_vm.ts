import { BaseNamedState, DefaultState, EnumRWTMode, ExceptionController, debugPrint } from "library_architecture_mvvm_modify_javascript";
import { DataForSearchVM } from "./data_for_search_vm";
import { EnumDataForSearchVM } from "./enum_data_for_search_vm";
import { ListUser } from "../../model/user/list_user";
import { KeysExceptionUtility } from "../../named_utility/keys_exception_utility";
import { ReadyDataUtility } from "../../named_utility/ready_data_utility";
import { UserRepository } from "../../model_repository/user_repository/user_repository";

export class SearchVM {
    // ModelRepository
    private readonly userRepository = new UserRepository(EnumRWTMode.test);

    // NamedUtility
    
    // NamedStreamWState
    private readonly namedState: BaseNamedState<DataForSearchVM>;

    public constructor(authorization: string, q: string)
    {
        this.namedState = new DefaultState<DataForSearchVM>(new DataForSearchVM(false,authorization,q,new ListUser([]),false,false,false));
    }
     
    public async initWBuild(
        callbackWException: (list: Array<any>) => void,
        callbackWFourHundredOneWYouMustSpecifyAuthorization: () => void,
        callbackWFourHundredOneWTokenIsNotCorrect: () => void,
        callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax: () => void,
        callbackWSuccess: (json: {}) => void): Promise<void> 
    {
        const firstRequest = await this.firstRequest();
        debugPrint("SearchVM: " + firstRequest);  
        const dataForNamed = this.namedState.getDataForNamed;
        switch(dataForNamed.getEnumDataForNamed) {
            case EnumDataForSearchVM.exception:
                return callbackWException(dataForNamed.getArrayWhereSwitchAndTwoElementsParameterExceptionController);
            case EnumDataForSearchVM.fourHundredOneWYouMustSpecifyAuthorization:
                return callbackWFourHundredOneWYouMustSpecifyAuthorization();
            case EnumDataForSearchVM.fourHundredOneWTokenIsNotCorrect:
                return callbackWFourHundredOneWTokenIsNotCorrect();
            case EnumDataForSearchVM.fourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax:
                return callbackWFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax();
            case EnumDataForSearchVM.success:
                return callbackWSuccess(dataForNamed.getJSONParameterListUser);
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
        const isWhereEqualsNullWEmptyParameterQ = this.namedState.getDataForNamed.isWhereEqualsNullWEmptyParameterQ();
        if(isWhereEqualsNullWEmptyParameterQ) {
            return this.firstQQFirstRequestQQIsWhereEqualsNullWEmptyParameterQ();
        }
        const getListUserWhereTheSearchWasPerformedFromQParameterOne = await this.userRepository.getListUserWhereTheSearchWasPerformedFromQParameterOne(this.namedState.getDataForNamed.q);
        if(getListUserWhereTheSearchWasPerformedFromQParameterOne.exceptionController.isWhereNotEqualsNullParameterException()) {
            return this.firstQQFirstRequestQQGetListUserWhereTheSearchWasPerformedFromQParameterOne(getListUserWhereTheSearchWasPerformedFromQParameterOne.exceptionController);
        }
        this.namedState.getDataForNamed.listUser = getListUserWhereTheSearchWasPerformedFromQParameterOne.parameter.getClone;
        return ReadyDataUtility.success;
    }

    private async firstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWYouMustSpecifyAuthorization = true;
        return KeysExceptionUtility.searchVMQQFirstQQFirstRequestQQIsWhereEqualsNullParameterAuthorization;
    }

    private async firstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredOneWTokenIsNotCorrect = true;
        return KeysExceptionUtility.searchVMQQFirstQQFirstRequestQQIsWhereNotEqualsTokenByAPIParameterAuthorization;
    }

    private async firstQQFirstRequestQQIsWhereEqualsNullWEmptyParameterQ(): Promise<string> {
        this.namedState.getDataForNamed.isFourHundredWTheRequestCouldNotBeUnderstoodByTheServerDueToMalformedSyntax = true;
        return KeysExceptionUtility.searchVMQQFirstQQFirstRequestQQIsWhereEqualsNullWEmptyParameterQ;
    }

    private async firstQQFirstRequestQQGetListUserWhereTheSearchWasPerformedFromQParameterOne(exceptionController: ExceptionController): Promise<string> {
        this.namedState.getDataForNamed.exceptionController = exceptionController;
        return exceptionController.getKeyParameterException;
    }
}