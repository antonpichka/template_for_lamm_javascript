import { BaseDataForNamed } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForExampleVM } from "./enum_data_for_example_vm";

export class DataForExampleVM extends BaseDataForNamed<EnumDataForExampleVM> {
    public constructor(isLoading: boolean) {
        super(isLoading);
    }

    public override get getEnumDataForNamed(): EnumDataForExampleVM {
        if(this.isLoading) {
            return EnumDataForExampleVM.isLoading;
        }
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForExampleVM.exception;
        }
        return EnumDataForExampleVM.success;
    }
}