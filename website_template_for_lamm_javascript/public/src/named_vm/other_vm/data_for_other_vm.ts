import { BaseDataForNamed } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForOtherVM } from "./enum_data_for_other_vm";

export class DataForOtherVM extends BaseDataForNamed<EnumDataForOtherVM> {
    public constructor(isLoading: boolean) {
        super(isLoading);
    }

    public override get getEnumDataForNamed(): EnumDataForOtherVM {
        if(this.isLoading) {
            return EnumDataForOtherVM.isLoading;
        }
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForOtherVM.exception;
        }
        return EnumDataForOtherVM.success;
    }

    public override toString(): string {
        return "DataForOtherVM(isLoading: " + this.isLoading + ", " 
            + "exceptionController: " + this.exceptionController + ")";
    }
}