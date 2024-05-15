import { BaseDataForNamed } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForExampleVM } from "./enum_data_for_example_vm";
import { KeysAPIUtility } from "../../named_utility/keys_api_utility";
import { AlgorithmsUtility } from "../../named_utility/algorithms_utility";

export class DataForExampleVM extends BaseDataForNamed<EnumDataForExampleVM> {
    public readonly authorization: string;
    public isFourHundredOneWYouMustSpecifyAuthorization: boolean;
    public isFourHundredOneWTokenIsNotCorrect: boolean;

    public constructor(isLoading: boolean, authorization: string, isFourHundredOneWYouMustSpecifyAuthorization: boolean, isFourHundredOneWTokenIsNotCorrect: boolean) {
        super(isLoading);
        this.authorization = authorization;
        this.isFourHundredOneWYouMustSpecifyAuthorization = isFourHundredOneWYouMustSpecifyAuthorization;
        this.isFourHundredOneWTokenIsNotCorrect = isFourHundredOneWTokenIsNotCorrect;
    }

    public override get getEnumDataForNamed(): EnumDataForExampleVM {
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForExampleVM.exception;
        }
        if(this.isFourHundredOneWYouMustSpecifyAuthorization) {
            return EnumDataForExampleVM.fourHundredOneWYouMustSpecifyAuthorization;
        }
        if(this.isFourHundredOneWTokenIsNotCorrect) {
            return EnumDataForExampleVM.fourHundredOneWTokenIsNotCorrect;
        }
        return EnumDataForExampleVM.success;
    }


    public get getArrayWhereSwitchAndTwoElementsParameterExceptionController(): Array<any> {
        switch(this.exceptionController.getKeyParameterException) {
            default:
                return [
                    503,
                    { 
                        message: "503 (Service Unavailable) The server is currently unable to handle the request due to a temporary overloading or maintenance of the server."
                    }
                ];
        }
    }

    public get getJSON(): {} {
        return { 
            statusCode: 200
        };
    }

    public isWhereEqualsNullParameterAuthorization(): boolean {
        return this.authorization == null;
    }

    public isWhereNotEqualsTokenByAPIParameterAuthorization(): boolean {
        return AlgorithmsUtility.getStringWhereReplaceBearerFromAuthorization(this.authorization) != KeysAPIUtility.aPIQQToken;
    }
}