const { debugPrint, TempCacheProvider } = require("library_architecture_mvvm_modify_javascript");
const EnumDataForOtherVM = require("./enum_data_for_other_vm.js");
const ReadyDataUtility = require("../../named_utility/ready_data_utility.js");
const FactoryObjectUtility = require("../../named_utility/factory_object_utility.js");

class OtherVM {
    // ModelWrapperRepository
    // NamedUtility

    // TempCacheProvider
    #tempCacheProvider = new TempCacheProvider();
    
    // NamedStreamWState
    #namedStreamWState;

    constructor() {
        this.#namedStreamWState = FactoryObjectUtility.getNamedStreamWStateWhereDataWOtherVM;
        this.#init();
        this.#build();
    }

    async #init() {
        this.#namedStreamWState.listenStreamDataForNamedFromCallback((_data) => {
            this.#build();
        });
        const firstRequest = await this.#firstRequest();
        debugPrint("OtherVM: " + firstRequest);
        this.#namedStreamWState.notifyStreamDataForNamed();
    }

    #build() {
        const dataWNamed = this.#namedStreamWState.getDataForNamed;
        switch(dataWNamed.getEnumDataForNamed) {
            case EnumDataForOtherVM.isLoading:
                document.getElementById("loader").style.display = "block";
                document.getElementById("pMessage").hidden = true;
                break;
            case EnumDataForOtherVM.exception:
                document.getElementById("loader").style.display = "none";
                document.getElementById("pMessage").hidden = false;
                document.getElementById("pMessage").innerText = dataWNamed.exceptionController.getKeyParameterException;
                break;
            case EnumDataForOtherVM.success:
                document.getElementById("loader").style.display = "none";
                document.getElementById("pMessage").hidden = false;
                document.getElementById("pMessage").innerText = "OtherVM";
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
new OtherVM();