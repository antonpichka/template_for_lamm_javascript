const { debugPrint, TempCacheProvider } = require("library_architecture_mvvm_modify_javascript");
const EnumDataForIndexVM = require("./enum_data_for_index_vm.js");
const ReadyDataUtility = require("../../named_utility/ready_data_utility.js");
const FactoryObjectUtility = require("../../named_utility/factory_object_utility.js");

class IndexVM {
    // ModelWrapperRepository
    // NamedUtility

    // TempCacheProvider
    #tempCacheProvider;
    
    // NamedStreamWState
    #namedStreamWState;

    constructor() {
        this.#tempCacheProvider = new TempCacheProvider();
        this.#namedStreamWState = FactoryObjectUtility.getNamedStreamWStateWhereDataWIndexVM;
        this.#init();
        this.#build();
    }

    async #init() {
        this.#namedStreamWState.listenStreamDataForNamedFromCallback((_data) => {
            this.#build();
        });
        const firstRequest = await this.#firstRequest();
        debugPrint("IndexVM: " + firstRequest);
        this.#namedStreamWState.notifyStreamDataForNamed();
    }

    #build() {
        const dataWNamed = this.#namedStreamWState.getDataForNamed;
        switch(dataWNamed.getEnumDataForNamed) {
            case EnumDataForIndexVM.isLoading:
                document.getElementById("loader").style.display = "block";
                document.getElementById("pMessage").hidden = true;
                break;
            case EnumDataForIndexVM.exception:
                document.getElementById("loader").style.display = "none";
                document.getElementById("pMessage").hidden = false;
                document.getElementById("pMessage").innerText = dataWNamed.exceptionController.getKeyParameterException;
                break;
            case EnumDataForIndexVM.success:
                document.getElementById("loader").style.display = "none";
                document.getElementById("pMessage").hidden = false;
                document.getElementById("pMessage").innerText = "IndexVM";
                break;
            default:
                break;      
        }
    }

    async #firstRequest() {
        this.#namedStreamWState.getDataForNamed.isLoading = false;
        return ReadyDataUtility.success;
    }
}
new IndexVM();