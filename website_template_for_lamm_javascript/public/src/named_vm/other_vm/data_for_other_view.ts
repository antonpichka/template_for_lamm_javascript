import { BaseDataForNamed } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForOtherView } from "./enum_data_for_other_view";

export class DataForOtherView extends BaseDataForNamed<EnumDataForOtherView> {
    public constructor(isLoading: boolean) {
        super(isLoading);
    }

    public override get getEnumDataForNamed(): EnumDataForOtherView {
        if(this.isLoading) {
            return EnumDataForOtherView.isLoading;
        }
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForOtherView.exception;
        }
        return EnumDataForOtherView.success;
    }
}