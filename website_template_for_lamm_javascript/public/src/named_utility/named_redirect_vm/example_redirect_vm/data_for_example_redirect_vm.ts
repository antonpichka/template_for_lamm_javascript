import { BaseDataForNamed } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForExampleRedirectVM } from "./enum_data_for_example_redirect_vm";

export class DataForExampleRedirectVM extends BaseDataForNamed<EnumDataForExampleRedirectVM> {
    public constructor(isLoading: boolean) {
        super(isLoading);
    }

    public override get getEnumDataForNamed(): EnumDataForExampleRedirectVM {
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForExampleRedirectVM.exception;
        }
        return EnumDataForExampleRedirectVM.success;
    }

    public override toString(): string {
        return "DataForExampleRedirectVM(isLoading: " + this.isLoading + ", " 
            + "exceptionController: " + this.exceptionController + ")";
    }
}