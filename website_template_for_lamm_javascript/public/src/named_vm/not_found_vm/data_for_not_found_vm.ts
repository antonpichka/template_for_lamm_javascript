import { BaseDataForNamed } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForNotFoundVM } from "./enum_data_for_not_found_vm";

export class DataForNotFoundVM extends BaseDataForNamed<EnumDataForNotFoundVM> {
    public constructor(isLoading: boolean) {
        super(isLoading);
    }

    public override get getEnumDataForNamed(): EnumDataForNotFoundVM {
        if(this.isLoading) {
            return EnumDataForNotFoundVM.isLoading;
        }
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForNotFoundVM.exception;
        }
        return EnumDataForNotFoundVM.success;
    }
}