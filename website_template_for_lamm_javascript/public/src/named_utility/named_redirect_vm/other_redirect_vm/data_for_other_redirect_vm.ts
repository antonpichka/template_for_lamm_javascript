import { BaseDataForNamed } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForOtherRedirectVM } from "./enum_data_for_other_redirect_vm";

export class DataForOtherRedirectVM extends BaseDataForNamed<EnumDataForOtherRedirectVM> {
    public constructor(isLoading: boolean) {
        super(isLoading);
    }

    public override get getEnumDataForNamed(): EnumDataForOtherRedirectVM {
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForOtherRedirectVM.exception;
        }
        return EnumDataForOtherRedirectVM.success;
    }
}