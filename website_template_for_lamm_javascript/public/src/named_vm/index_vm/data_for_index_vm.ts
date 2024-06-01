import { BaseDataForNamed } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForIndexVM } from "./enum_data_for_index_vm";

export class DataForIndexVM extends BaseDataForNamed<EnumDataForIndexVM> {
    public constructor(isLoading: boolean) {
        super(isLoading);
    }

    public override get getEnumDataForNamed(): EnumDataForIndexVM {
        if(this.isLoading) {
            return EnumDataForIndexVM.isLoading;
        }
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForIndexVM.exception;
        }
        return EnumDataForIndexVM.success;
    }

    public override toString(): string {
        return "DataForIndexVM(isLoading: " + this.isLoading + ", " 
            + "exceptionController: " + this.exceptionController + ")";
    }
}