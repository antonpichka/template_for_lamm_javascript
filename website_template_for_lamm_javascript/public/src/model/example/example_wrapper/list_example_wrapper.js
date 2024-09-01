const { BaseListModelWrapper }  = require("library_architecture_mvvm_modify_javascript");
const Example = require("../example.js");
const ListExample = require("../list_example.js");

class ListExampleWrapper extends BaseListModelWrapper {
    constructor(listsListObject) {
        super(listsListObject);
    }
    
    createListModel() {
        const listModel = new Array();
        for(const itemListObject of this.listsListObject) {
            listModel.push(new Example(itemListObject[0]));
        }
        return new ListExample(listModel);
    }
}

module.exports = ListExampleWrapper;