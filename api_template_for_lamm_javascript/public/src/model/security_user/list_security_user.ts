import { BaseListModel } from "library_architecture_mvvm_modify_javascript";
import { SecurityUser } from "./security_user";

export class ListSecurityUser<T extends SecurityUser> extends BaseListModel<T> {
    public constructor(listModel: Array<T>) {
        super(listModel);
    }

    public override get getClone(): ListSecurityUser<T> {
        const newListModel = new Array<T>();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone as T);
        }
        return new ListSecurityUser(newListModel);
    }

    public override toString(): string {
        let strListModel = "\n";
        for(const itemModel of this.listModel) {
            strListModel += itemModel + ",\n";
        }
        return "ListSecurityUser(listModel: [" + strListModel + "])";
    }
}