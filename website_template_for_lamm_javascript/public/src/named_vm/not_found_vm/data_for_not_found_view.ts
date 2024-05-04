import { BaseDataForNamed } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForNotFoundView } from "./enum_data_for_not_found_view";

export class DataForNotFoundView extends BaseDataForNamed<EnumDataForNotFoundView> {
    public constructor(isLoading: boolean) {
        super(isLoading);
    }

    public override get getEnumDataForNamed(): EnumDataForNotFoundView {
        if(this.isLoading) {
            return EnumDataForNotFoundView.isLoading;
        }
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForNotFoundView.exception;
        }
        return EnumDataForNotFoundView.success;
    }
}