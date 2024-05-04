import { BaseDataForNamed } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForIndexView } from "./enum_data_for_index_view";

export class DataForIndexView extends BaseDataForNamed<EnumDataForIndexView> {
    public constructor(isLoading: boolean) {
        super(isLoading);
    }

    public override get getEnumDataForNamed(): EnumDataForIndexView {
        if(this.isLoading) {
            return EnumDataForIndexView.isLoading;
        }
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForIndexView.exception;
        }
        return EnumDataForIndexView.success;
    }
}