const { BaseListModel } = require("library_architecture_mvvm_modify_javascript");

class ListExample extends BaseListModel {
    constructor(listModel) {
        super(listModel);
    }

    get getClone() {
        const newListModel = new Array();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone);
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