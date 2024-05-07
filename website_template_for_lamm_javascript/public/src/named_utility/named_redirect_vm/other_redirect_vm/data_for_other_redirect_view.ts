import { BaseDataForNamed } from "library_architecture_mvvm_modify_javascript";
import { EnumDataForOtherRedirectView } from "./enum_data_for_other_redirect_view";

export class DataForOtherRedirectView extends BaseDataForNamed<EnumDataForOtherRedirectView> {
    public constructor(isLoading: boolean) {
        super(isLoading);
    }

    public override get getEnumDataForNamed(): EnumDataForOtherRedirectView {
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForOtherRedirectView.exception;
        }
        return EnumDataForOtherRedirectView.success;
    }
}