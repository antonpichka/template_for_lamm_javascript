import { BaseListModel } from "library_architecture_mvvm_modify_javascript";
import { Example } from "./example";

export class ListExample<T extends Example> extends BaseListModel<T> {
    public constructor(listModel: Array<T>) {
        super(listModel);
    }

    public override get getClone(): ListExample<T> {
        const newListModel = new Array<T>();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone as T);
        }
        return new ListExample(newListModel);
    }

    public override toString(): string {
        let strListModel = "\n";
        for(const itemModel of this.listModel) {
            strListModel += itemModel + ",\n";
        }
        return "ListExample(listModel: [" + strListModel + "])";
    }
}