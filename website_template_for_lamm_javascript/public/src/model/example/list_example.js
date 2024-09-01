const { BaseListModel } = require("library_architecture_mvvm_modify_javascript");

class ListExample extends BaseListModel {
    constructor(listModel) {
        super(listModel);
    }

    clone() {
        const newListModel = new Array();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.clone());
        }
        return new ListExample(newListModel);
    }

    toString() {
        let strListModel = "\n";
        for(const itemModel of this.listModel) {
            strListModel += itemModel + ",\n";
        }
        return "ListExample(listModel: [" + strListModel + "])";
    }
}

module.exports = ListExample;