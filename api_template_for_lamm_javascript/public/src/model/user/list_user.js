const { BaseListModel } = require("library_architecture_mvvm_modify_javascript");

class ListUser extends BaseListModel {
    constructor(listModel) {
        super(listModel);
    }

    get getClone() {
        const newListModel = new Array();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone);
        }
        return new ListUser(newListModel);
    }

    toString() {
        let strListModel = "\n";
        for(const itemModel of this.listModel) {
            strListModel += itemModel + ",\n";
        }
        return "ListUser(listModel: [" + strListModel + "])";
    }
}

module.exports = ListUser;