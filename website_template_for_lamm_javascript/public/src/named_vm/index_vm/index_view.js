import { LocalException, EnumGuilty, BaseModel, BaseListModel, Result, NetworkException, BaseDataForNamed, BaseNamedViewModel, DefaultStreamWState, debugPrint } from "library_architecture_mvvm_modify_javascript";

class KeysHttpServiceUtility {
    /* IPAddress */
    static #iPAddressQQIp = "ip";

    constructor() {
        if (new.target === KeysHttpServiceUtility) {
            throw new LocalException("KeysHttpServiceUtility",EnumGuilty.developer,"KeysHttpServiceUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get iPAddressQQIp() {
        return this.#iPAddressQQIp;
    }
}

class KeysExceptionUtility {
    /* UNKNOWN */
    static #uNKNOWN = "uNKNOWN";

    constructor() {
        if (new.target === KeysExceptionUtility) {
            throw new LocalException("KeysExceptionUtility",EnumGuilty.developer,"KeysExceptionUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get uNKNOWN() {
        return this.#uNKNOWN;
    }
}

class KeysSuccessUtility {
    /* SUCCESS */
    static #sUCCESS = "sUCCESS";

    constructor() {
        if (new.target === KeysSuccessUtility) {
            throw new LocalException("KeysSuccessUtility",EnumGuilty.developer,"KeysSuccessUtilityQQConstructor","This class is static, there is no point in calling an object and inheritance");
        }
    }

    static get sUCCESS() {
        return this.#sUCCESS;
    }
}

class IPAddress extends BaseModel {
    #ip;

    constructor(ip) {
        super("" + ip + "");
        this.#ip = ip;
    }

    get getClone() {
        return new IPAddress(this.ip);
    }

    toString() {
        return "IPAddress(ip: " + this.ip + ")";
    }

    get ip() {
        return this.#ip;
    }
}

class ListIPAddress extends BaseListModel {
    constructor(listModel) {
        super(listModel);
    }

    get getClone() {
        const newListModel = new Array();
        for(const itemModel of this.listModel) {
            newListModel.push(itemModel.getClone);
        }
        return new ListIPAddress(newListModel);
    }

    toString() {
        let strListModel = "\n";
        for(const itemModel of this.listModel) {
            strListModel += itemModel.toString() + ",\n";
        }
        return "ListIPAddress(listModel: [" + strListModel + "])";
    }
}

/// This class needs to be called where there are network requests (in the data source), 
/// since without this class the developer will not know in which class the network requests are
class HttpService {
    static instance = new HttpService();

    constructor() {
        if(HttpService.instance != null) {
            return HttpService.instance;
        }
    }
}

class GetEEIPAddressEEWhereJsonipAPIEEParameterHttpService {
    #httpService = HttpService.instance;

    async getIPAddressWhereJsonipAPIParameterHttpService() {
        try {
            const response = await fetch("https://jsonip.com/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.status != 200) {
                throw new NetworkException.fromKeyAndStatusCode("GetEEIPAddressEEWhereJsonipAPIEEParameterHttpService",response.status.toString(),response.status);
            }
            const json = await response.json();
            const map = new Map(Object.entries(json));
            const iPAddress = new IPAddress(map.get(KeysHttpServiceUtility.iPAddressQQIp));
            return Result.success(iPAddress);
        } catch(exception) {
            if(exception instanceof NetworkException) {
                return Result.exception(exception);
            }
            return Result.exception(new LocalException("GetEEIPAddressEEWhereJsonipAPIEEParameterHttpService",EnumGuilty.device,KeysExceptionUtility.uNKNOWN,exception.toString()));
        }
    }

    get _httpService() {
        return this.#httpService;
    }
}

const EnumDataForMainView = {
    isLoading : "isLoading",
    exception : "exception",
    success : "success",
};

class DataForMainView extends BaseDataForNamed {
    iPAddress;

    constructor(isLoading,iPAddress) {
        super(isLoading);
        this.iPAddress = iPAddress;
    }

    get getEnumDataForNamed() {
        if(this.isLoading) {
            return EnumDataForMainView.isLoading;
        }
        if(this.exceptionController.isWhereNotEqualsNullParameterException()) {
            return EnumDataForMainView.exception;
        }
        return EnumDataForMainView.success;
    }
}

/// This class is an interface, but since there are no interfaces in JS, the presence of this class gives information to the developer. 
/// Which ones specifically methods should there be in the "MainViewModel" and "TestMainViewModel" classes
class IMainViewModel {

}

class TestMainViewModel extends BaseNamedViewModel {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    // NamedUtility

    constructor() {
        super(new DefaultStreamWState(new DataForMainView(true,new IPAddress(""))));
    }

    async init() {
        // Simulation get "IPAddress"
        const iPAddress = new IPAddress("121.121.12.12");
        await new Promise(resolve => setTimeout(resolve,1000));
        this.getDataForNamedParameterNamedStreamWState.isLoading = false;
        this.getDataForNamedParameterNamedStreamWState.iPAddress = iPAddress.getClone;
        return KeysSuccessUtility.sUCCESS;
    }
}

class MainViewModel extends BaseNamedViewModel {
    // OperationEEModel(EEWhereNamed)[EEFromNamed]EEParameterNamedService
    #getEEIPAddressEEWhereJsonipAPIEEParameterHttpService = new GetEEIPAddressEEWhereJsonipAPIEEParameterHttpService();

    // NamedUtility

    constructor() {
        super(new DefaultStreamWState(new DataForMainView(true,new IPAddress(""))));
    }

    async init() {
        await new Promise(resolve => setTimeout(resolve,1000));
        const getIPAddressWhereJsonipAPIParameterHttpService = await this.#getEEIPAddressEEWhereJsonipAPIEEParameterHttpService.getIPAddressWhereJsonipAPIParameterHttpService();
        if(getIPAddressWhereJsonipAPIParameterHttpService.exceptionController.isWhereNotEqualsNullParameterException()) {
            return this.#firstQQInitQQGetIPAddressWhereJsonipAPIParameterHttpService(getIPAddressWhereJsonipAPIParameterHttpService.exceptionController);
        }
        this.getDataForNamedParameterNamedStreamWState.isLoading = false;
        this.getDataForNamedParameterNamedStreamWState.iPAddress = getIPAddressWhereJsonipAPIParameterHttpService.parameter.getClone;
        return KeysSuccessUtility.sUCCESS;
    }

    async #firstQQInitQQGetIPAddressWhereJsonipAPIParameterHttpService(exceptionController) {
        this.getDataForNamedParameterNamedStreamWState.isLoading = false;
        this.getDataForNamedParameterNamedStreamWState.exceptionController = exceptionController;
        return exceptionController.getKeyParameterException;
    }
}

class MainView {
    #viewModel;

    constructor() {
        /// RELEASE CODE
        this.#viewModel = new MainViewModel();
        /// TEST CODE
        // this.#viewModel = new TestMainViewModel();
        this.#initParameterViewModel();
        this.#buildParameterViewModel();
    }

    async #initParameterViewModel() {
        this.#viewModel.listenStreamDataForNamedFromCallbackParameterNamedStreamWState((data) => {
            this.#buildParameterViewModel();
        });
        const result = await this.#viewModel.init();
        debugPrint("MainView: " + result);
        this.#viewModel.notifyStreamDataForNamedParameterNamedStreamWState();
    }

    #buildParameterViewModel() {
        const dataForNamedParameterNamedStreamWState = this.#viewModel.getDataForNamedParameterNamedStreamWState;
        switch(dataForNamedParameterNamedStreamWState.getEnumDataForNamed) {
            case EnumDataForMainView.isLoading:
                document.getElementById("loader").style.display = "block";
                document.getElementById("pMessage").hidden = true;
                break;
            case EnumDataForMainView.exception:
                document.getElementById("loader").style.display = "none";
                document.getElementById("pMessage").hidden = false;
                document.getElementById("pMessage").innerText = dataForNamedParameterNamedStreamWState.exceptionController.getKeyParameterException;
                break;
            case EnumDataForMainView.success:
                document.getElementById("loader").style.display = "none";
                document.getElementById("pMessage").hidden = false;
                document.getElementById("pMessage").innerText = dataForNamedParameterNamedStreamWState.iPAddress.toString();
                break;
            default:
                break;      
        }
    }
}

function main() {
    new MainView();
}
main();
// Console {
    // EXPECTED OUTPUT:
    //
    // MainView: sUCCESS

    /// OR

    // EXPECTED OUTPUT:
    //
    // ===start_to_trace_exception===
    //
    // WhereHappenedException(Class) --> ${WhereHappenedException(Class)}
    // NameException(Class) --> ${NameException(Class)}
    // toString() --> ${toString()}
    //
    // ===end_to_trace_exception===
    //
    // MainView: ${getKeyParameterException}
// }
// Html {
    // EXPECTED OUTPUT:
    //
    // IPAddress(ip: ${your_ip})

    /// OR

    // EXPECTED OUTPUT:
    //
    // ${getKeyParameterException}
// }