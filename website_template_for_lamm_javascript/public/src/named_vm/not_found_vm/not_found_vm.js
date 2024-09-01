const { debugPrint, TempCacheProvider } = require("library_architecture_mvvm_modify_javascript");
const EnumDataForNotFoundVM = require("./enum_data_for_not_found_vm.js");
const ReadyDataUtility = require("../../named_utility/ready_data_utility.js");
const FactoryObjectUtility = require("../../named_utility/factory_object_utility.js");

class NotFoundVM {
    // ModelWrapperRepository
    // NamedUtility
    
    // TempCacheProvider
    #tempCacheProvider;

    // NamedStreamWState
    #namedStreamWState;

    constructor() {
        this.#tempCacheProvider = new TempCacheProvider();
        this.#namedStreamWState = FactoryObjectUtility.getNamedStreamWStateWhereDataWNotFoundVM;
        this.#init();
        this.#build();
    }

    async #init() {
        this.#namedStreamWState.listenStreamDataForNamedFromCallback((_data) => {
            this.#build();
        });
        const firstRequest = await this.#firstRequest();
        debugPrint("NotFoundVM: " + firstRequest);
        this.#namedStreamWState.notifyStreamDataForNamed();
    }

    #build() {
        const dataWNamed = this.#namedStreamWState.getDataForNamed;
        switch(dataWNamed.getEnumDataForNamed) {
            case EnumDataForNotFoundVM.isLoading:
                document.getElementById("loader").style.display = "block";
                document.getElementById("pMessage").hidden = true;
                break;
            case EnumDataForNotFoundVM.exception:
                document.getElementById("loader").style.display = "none";
                document.getElementById("pMessage").hidden = false;
                document.getElementById("pMessage").innerText = dataWNamed.exceptionController.getKeyParameterException;
                break;
            case EnumDataForNotFoundVM.success:
                document.getElementById("loader").style.display = "none";
                document.getElementById("pMessage").hidden = false;
                document.getElementById("pMessage").innerText = "NotFoundVM";
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
new NotFoundVM();