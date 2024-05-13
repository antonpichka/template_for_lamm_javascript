/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/library_architecture_mvvm_modify_javascript/dist/esm/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/library_architecture_mvvm_modify_javascript/dist/esm/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseDataForNamed: () => (/* binding */ BaseDataForNamed),
/* harmony export */   BaseException: () => (/* binding */ BaseException),
/* harmony export */   BaseListModel: () => (/* binding */ BaseListModel),
/* harmony export */   BaseModel: () => (/* binding */ BaseModel),
/* harmony export */   BaseModelWNamedWNamedWNamedIterator: () => (/* binding */ BaseModelWNamedWNamedWNamedIterator),
/* harmony export */   BaseNamedState: () => (/* binding */ BaseNamedState),
/* harmony export */   BaseNamedStreamWState: () => (/* binding */ BaseNamedStreamWState),
/* harmony export */   DefaultState: () => (/* binding */ DefaultState),
/* harmony export */   DefaultStreamWState: () => (/* binding */ DefaultStreamWState),
/* harmony export */   EnumGuilty: () => (/* binding */ EnumGuilty),
/* harmony export */   EnumRWTMode: () => (/* binding */ EnumRWTMode),
/* harmony export */   ExceptionController: () => (/* binding */ ExceptionController),
/* harmony export */   LocalException: () => (/* binding */ LocalException),
/* harmony export */   NamedCallback: () => (/* binding */ NamedCallback),
/* harmony export */   NetworkException: () => (/* binding */ NetworkException),
/* harmony export */   RWTMode: () => (/* binding */ RWTMode),
/* harmony export */   Result: () => (/* binding */ Result),
/* harmony export */   TempCacheService: () => (/* binding */ TempCacheService),
/* harmony export */   debugPrint: () => (/* binding */ debugPrint),
/* harmony export */   debugPrintException: () => (/* binding */ debugPrintException)
/* harmony export */ });
class BaseDataForNamed {
    constructor(isLoading) {
        this.isLoading = isLoading;
        this.exceptionController = ExceptionController.success();
    }
}
class BaseException {
    constructor(thisClass, exceptionClass, key) {
        this.thisClass = thisClass;
        this.exceptionClass = exceptionClass;
        this.key = key;
    }
    /// Call this method in the descendant constructor as the last line
    debugPrintExceptionWhereToStringParametersThisClassAndExceptionClass() {
        debugPrintException("\n===start_to_trace_exception===\n");
        debugPrintException("WhereHappenedException(Class) --> " + this.thisClass + "\n" +
            "NameException(Class) --> " + this.exceptionClass + "\n" +
            "toString() --> " + this.toString());
        debugPrintException("\n===end_to_trace_exception===\n");
    }
}
var EnumGuilty;
(function (EnumGuilty) {
    EnumGuilty[EnumGuilty["developer"] = 0] = "developer";
    EnumGuilty[EnumGuilty["device"] = 1] = "device";
    EnumGuilty[EnumGuilty["user"] = 2] = "user";
})(EnumGuilty || (EnumGuilty = {}));
class LocalException extends BaseException {
    constructor(thisClass, valueWEnumGuilty, key, message = "") {
        super(thisClass, "LocalException", key);
        this.valueWEnumGuilty = valueWEnumGuilty;
        this.message = message;
        this.debugPrintExceptionWhereToStringParametersThisClassAndExceptionClass();
    }
    toString() {
        return "LocalException(valueWEnumGuilty: " + this.valueWEnumGuilty + ", " +
            "key: " + this.key + ", " +
            "message (optional): " + this.message + ")";
    }
}
class NetworkException extends BaseException {
    constructor(thisClass, key, statusCode, nameStatusCode = "", descriptionStatusCode = "") {
        super(thisClass, "NetworkException", key);
        this.statusCode = statusCode;
        this.nameStatusCode = nameStatusCode;
        this.descriptionStatusCode = descriptionStatusCode;
        this.debugPrintExceptionWhereToStringParametersThisClassAndExceptionClass();
    }
    static fromKeyAndStatusCode(thisClass, key, statusCode) {
        switch (statusCode) {
            case 201:
                return new NetworkException(thisClass, key, 201, "201 Created", "The request has been fulfilled and resulted in a new resource being created.");
            case 202:
                return new NetworkException(thisClass, key, 202, "202 Accepted", "The request has been accepted for processing, but the processing has not been completed.");
            case 203:
                return new NetworkException(thisClass, key, 203, "203 Non-Authoritative Information", "The returned metaInformation in the entity-header is not the definitive set as available from the origin server, but is gathered from a local or a third-party copy.");
            case 204:
                return new NetworkException(thisClass, key, 204, "204 No Content", "The server has fulfilled the request but does not need to return an entity-body, and might want to return updated metaInformation.");
            case 205:
                return new NetworkException(thisClass, key, 205, "205 Reset Content", "The server has fulfilled the request and the user agent SHOULD reset the document view which caused the request to be sent.");
            case 206:
                return new NetworkException(thisClass, key, 206, "206 Partial Content", "The server has fulfilled the partial GET request for the resource.");
            case 300:
                return new NetworkException(thisClass, key, 300, "300 Multiple Choices", "User (or user agent) can select a preferred representation and redirect its request to that location.");
            case 301:
                return new NetworkException(thisClass, key, 301, "301 Moved Permanently", "The requested resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs.");
            case 302:
                return new NetworkException(thisClass, key, 302, "302 Found", "The requested resource resides temporarily under a different URI.");
            case 303:
                return new NetworkException(thisClass, key, 303, "303 See Other", "The response to the request can be found under a different URI and SHOULD be retrieved using a GET method on that resource.");
            case 304:
                return new NetworkException(thisClass, key, 304, "304 Not Modified", "If the client has performed a conditional GET request and access is allowed, but the document has not been modified, the server SHOULD respond with this status code.");
            case 305:
                return new NetworkException(thisClass, key, 305, "305 Use Proxy", "The requested resource MUST be accessed through the proxy given by the Location field.");
            case 307:
                return new NetworkException(thisClass, key, 307, "307 Temporary Redirect", "The requested resource resides temporarily under a different URI.");
            case 400:
                return new NetworkException(thisClass, key, 400, "400 Bad Request", "The request could not be understood by the server due to malformed syntax.");
            case 401:
                return new NetworkException(thisClass, key, 401, "401 Unauthorized", "The request requires user authentication.");
            case 403:
                return new NetworkException(thisClass, key, 403, "403 Forbidden", "The server understood the request, but is refusing to fulfill it.");
            case 404:
                return new NetworkException(thisClass, key, 404, "404 Not Found", "The server has not found anything matching the Request-URI.");
            case 405:
                return new NetworkException(thisClass, key, 405, "405 Method Not Allowed','The method specified in the Request-Line is not allowed for the resource identified by the Request-URI.");
            case 406:
                return new NetworkException(thisClass, key, 406, "406 Not Acceptable", "The resource identified by the request is only capable of generating response entities which have content characteristics not acceptable according to the accept headers sent in the request.");
            case 407:
                return new NetworkException(thisClass, key, 407, "407 Proxy Authentication Required", "This code is similar to 401 (Unauthorized), but indicates that the client must first authenticate itself with the proxy.");
            case 408:
                return new NetworkException(thisClass, key, 408, "408 Request Timeout", "The client did not produce a request within the time that the server was prepared to wait.");
            case 409:
                return new NetworkException(thisClass, key, 409, "409 Conflict", "The request could not be completed due to a conflict with the current state of the resource.");
            case 410:
                return new NetworkException(thisClass, key, 410, "410 Gone", "The requested resource is no longer available at the server and no forwarding address is known.");
            case 411:
                return new NetworkException(thisClass, key, 411, "411 Length Required", "The server refuses to accept the request without a defined Content-Length.");
            case 412:
                return new NetworkException(thisClass, key, 412, "412 Precondition Failed", "The precondition given in one or more of the request-header fields evaluated to false when it was tested on the server.");
            case 413:
                return new NetworkException(thisClass, key, 413, "413 Request Entity Too Large", "The server is refusing to process a request because the request entity is larger than the server is willing or able to process.");
            case 414:
                return new NetworkException(thisClass, key, 414, "414 Request-URI Too Long", "The server is refusing to service the request because the Request-URI is longer than the server is willing to interpret.");
            case 415:
                return new NetworkException(thisClass, key, 415, "415 Unsupported Media Type", "The server is refusing to service the request because the entity of the request is in a format not supported by the requested resource for the requested method.");
            case 416:
                return new NetworkException(thisClass, key, 416, "416 Requested Range Not Satisfiable", "A server SHOULD return a response with this status code if a request included a Range request-header field (section 14.35), and none of the range-specifier values in this field overlap the current extent of the selected resource, and the request did not include an If-Range request-header field.");
            case 417:
                return new NetworkException(thisClass, key, 417, "417 Expectation Failed", "The expectation given in an Expect request-header field (see section 14.20) could not be met by this server.");
            case 500:
                return new NetworkException(thisClass, key, 500, "500 Internal Server Error", "The server encountered an unexpected condition which prevented it from fulfilling the request.");
            case 501:
                return new NetworkException(thisClass, key, 501, "501 Not Implemented", "The server does not support the functionality interface_function_view_model to fulfill the request.");
            case 502:
                return new NetworkException(thisClass, key, 502, "502 Bad Gateway", "The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.");
            case 503:
                return new NetworkException(thisClass, key, 503, "503 Service Unavailable", "The server is currently unable to handle the request due to a temporary overloading or maintenance of the server.");
            case 504:
                return new NetworkException(thisClass, key, 504, "504 Gateway Timeout", "The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server specified by the URI.");
            case 505:
                return new NetworkException(thisClass, key, 505, "505 HTTP Version Not Supported", "The server does not support, or refuses to support, the HTTP protocol version that was used in the request message.");
            default:
                return new NetworkException(thisClass, key, 0);
        }
    }
    toString() {
        return "NetworkException(key: " + this.key + ", " +
            "statusCode: " + this.statusCode + ", " +
            "nameStatusCode (optional): " + this.nameStatusCode + ", " +
            "descriptionStatusCode (optional): " + this.descriptionStatusCode + ")";
    }
}
class BaseModelWNamedWNamedWNamedIterator {
    constructor() {
        this.listModelIterator = new Array();
    }
    getSortedListModelFromNewListModelParameterListModelIterator(newListModel) {
        if (newListModel.length <= 0) {
            return new Array();
        }
        this.listModelIterator.push(...newListModel);
        const newListModelFIRST = new Array();
        while (this.moveNext()) {
            const newModel = this.current;
            newListModelFIRST.push(newModel);
        }
        return newListModelFIRST;
    }
    moveNext() {
        return this.listModelIterator.length > 0;
    }
}
class BaseListModel {
    constructor(listModel) {
        this.listModel = listModel;
    }
    sortingFromModelWNamedWNamedWNamedIteratorParameterListModel(modelWNamedWNamedWNamedIterator) {
        const sortedListModelFromNewListModelParameterListModelIterator = modelWNamedWNamedWNamedIterator.getSortedListModelFromNewListModelParameterListModelIterator(this.listModel);
        this.listModel.length > 0 ? this.listModel.splice(0, this.listModel.length) : null;
        sortedListModelFromNewListModelParameterListModelIterator.length > 0 ? this.listModel.push(...sortedListModelFromNewListModelParameterListModelIterator) : null;
    }
    insertFromNewModelParameterListModel(newModel) {
        this.listModel.push(newModel);
    }
    updateFromNewModelParameterListModel(newModel) {
        const findIndex = this.listModel.findIndex((itemModel) => itemModel.uniqueId == newModel.uniqueId);
        this.listModel.splice(findIndex, 1, newModel);
    }
    deleteFromUniqueIdByModelParameterListModel(uniqueIdByModel) {
        const findIndex = this.listModel.findIndex((itemModel) => itemModel.uniqueId == uniqueIdByModel);
        this.listModel.splice(findIndex, 1);
    }
    insertListFromNewListModelParameterListModel(newListModel) {
        this.listModel.push(...newListModel);
    }
    updateListFromNewListModelParameterListModel(newListModel) {
        for (const newItemModel of newListModel) {
            const findIndex = this.listModel.findIndex((itemModel) => itemModel.uniqueId == newItemModel.uniqueId);
            this.listModel.splice(findIndex, 1, newItemModel);
        }
    }
    deleteListFromListUniqueIdByModelParameterListModel(listUniqueIdByModel) {
        for (const itemUniqueIdByModel of listUniqueIdByModel) {
            const findIndex = this.listModel.findIndex((itemModel) => itemModel.uniqueId == itemUniqueIdByModel);
            this.listModel.splice(findIndex, 1);
        }
    }
}
class BaseModel {
    constructor(uniqueId) {
        this.uniqueId = uniqueId;
    }
}
class BaseNamedState {
    constructor() {
    }
}
class DefaultState extends BaseNamedState {
    constructor(dataForNamed) {
        super();
        this.isDispose = false;
        this.dataForNamed = dataForNamed;
    }
    dispose() {
        if (this.isDispose) {
            return;
        }
        this.isDispose = true;
    }
    get getDataForNamed() {
        return this.dataForNamed;
    }
}
class BaseNamedStreamWState {
    constructor() {
    }
}
class DefaultStreamWState extends BaseNamedStreamWState {
    constructor(dataForNamed) {
        super();
        this.isDispose = false;
        this.dataForNamed = dataForNamed;
        this.callback = null;
    }
    dispose() {
        if (this.isDispose) {
            return;
        }
        this.isDispose = true;
        this.callback = null;
    }
    get getDataForNamed() {
        return this.dataForNamed;
    }
    listenStreamDataForNamedFromCallback(callback) {
        if (this.isDispose) {
            throw new LocalException("DefaultStreamWState", EnumGuilty.developer, "DefaultStreamWStateQQListenStreamDataForNamedFromCallback", "Already disposed of");
        }
        if (this.callback != null) {
            throw new LocalException("DefaultStreamWState", EnumGuilty.developer, "DefaultStreamWStateQQListenStreamDataForNamedFromCallback", "Duplicate");
        }
        this.callback = callback;
    }
    notifyStreamDataForNamed() {
        if (this.isDispose) {
            throw new LocalException("DefaultStreamWState", EnumGuilty.developer, "DefaultStreamWStateQQNotifyStreamDataForNamed", "Already disposed of");
        }
        if (this.callback == null) {
            throw new LocalException("DefaultStreamWState", EnumGuilty.developer, "DefaultStreamWStateQQNotifyStreamDataForNamed", "Stream has no listener");
        }
        this.callback(this.dataForNamed);
    }
}
class TempCacheService {
    constructor() {
        this.tempCache = new Map();
        this.tempCacheWListAction = new Map();
    }
    static clearTempCacheParmeterInstance() {
        const tempCache = this.instance.tempCache;
        tempCache.clear();
    }
    static closeStreamFromKeyTempCacheParmeterInstance(keyTempCache) {
        const tempCacheWListAction = this.instance.tempCacheWListAction;
        if (!tempCacheWListAction.has(keyTempCache)) {
            return;
        }
        const get = tempCacheWListAction.get(keyTempCache);
        get === null || get === void 0 ? void 0 : get.splice(0, get.length);
    }
    static closeStreamFromListKeyTempCacheParmeterInstance(listKeyTempCache) {
        const tempCacheWListAction = this.instance.tempCacheWListAction;
        for (const itemKeyTempCache of listKeyTempCache) {
            if (!tempCacheWListAction.has(itemKeyTempCache)) {
                return;
            }
            const get = tempCacheWListAction.get(itemKeyTempCache);
            get === null || get === void 0 ? void 0 : get.splice(0, get.length);
        }
    }
    static closeStreamsParameterInstance() {
        const tempCacheWListAction = this.instance.tempCacheWListAction;
        for (const [, value] of tempCacheWListAction) {
            value.splice(0, value.length);
        }
    }
    getFromKeyTempCacheParameterTempCache(keyTempCache) {
        const tempCache = this.tempCache;
        if (!tempCache.has(keyTempCache)) {
            throw new LocalException("TempCacheService", EnumGuilty.developer, keyTempCache, "No exists key");
        }
        return tempCache.get(keyTempCache);
    }
    listenStreamFromKeyTempCacheAndCallbackParameterOne(keyTempCache, callback) {
        var _a, _b;
        const tempCacheWListAction = this.tempCacheWListAction;
        if (!tempCacheWListAction.has(keyTempCache)) {
            tempCacheWListAction.set(keyTempCache, new Array());
            (_a = tempCacheWListAction.get(keyTempCache)) === null || _a === void 0 ? void 0 : _a.push(callback);
            return;
        }
        (_b = tempCacheWListAction.get(keyTempCache)) === null || _b === void 0 ? void 0 : _b.push(callback);
    }
    updateFromKeyTempCacheAndValueParameterTempCache(keyTempCache, value) {
        this.tempCache.set(keyTempCache, value);
    }
    updateWhereStreamNotificationIsPossibleFromKeyTempCacheAndValueParameterTempCache(keyTempCache, value) {
        this.updateFromKeyTempCacheAndValueParameterTempCache(keyTempCache, value);
        const tempCacheWListAction = this.tempCacheWListAction;
        if (!tempCacheWListAction.has(keyTempCache)) {
            return;
        }
        const get = tempCacheWListAction.get(keyTempCache);
        for (const itemGet of get) {
            itemGet(value);
        }
    }
    deleteFromKeyTempCacheParameterTempCache(keyTempCache) {
        this.tempCache.delete(keyTempCache);
    }
}
TempCacheService.instance = new TempCacheService();
var EnumRWTMode;
(function (EnumRWTMode) {
    EnumRWTMode[EnumRWTMode["release"] = 0] = "release";
    EnumRWTMode[EnumRWTMode["test"] = 1] = "test";
})(EnumRWTMode || (EnumRWTMode = {}));
class NamedCallback {
    constructor(name, callback) {
        this.name = name;
        this.callback = callback;
    }
}
class RWTMode {
    constructor(enumRWTMode, listNamedCallbackWRelease, listNamedCallbackWTest) {
        this.enumRWTMode = enumRWTMode;
        this.mapStringWNamedCallbackWRelease = RWTMode.getMapStringWNamedCallbackFromListNamedCallback(listNamedCallbackWRelease);
        this.mapStringWNamedCallbackWTest = RWTMode.getMapStringWNamedCallbackFromListNamedCallback(listNamedCallbackWTest);
    }
    static getMapStringWNamedCallbackFromListNamedCallback(listNamedCallback) {
        const mapStringWNamedCallback = new Map();
        for (const itemNamedCallback of listNamedCallback) {
            mapStringWNamedCallback.set(itemNamedCallback.name, itemNamedCallback);
        }
        return mapStringWNamedCallback;
    }
    getNamedCallbackFromName(name) {
        const mapStringWNamedCallbackWhereSelectModParametersThree = this.getMapStringWNamedCallbackWhereSelectModParametersThree;
        if (!mapStringWNamedCallbackWhereSelectModParametersThree.has(name)) {
            throw new LocalException("RWTMode", EnumGuilty.developer, "RWTModeQQGetNamedCallbackFromName", "no exists key: " + name);
        }
        return mapStringWNamedCallbackWhereSelectModParametersThree.get(name);
    }
    get getMapStringWNamedCallbackWhereSelectModParametersThree() {
        if (this.enumRWTMode == EnumRWTMode.release) {
            return this.mapStringWNamedCallbackWRelease;
        }
        return this.mapStringWNamedCallbackWTest;
    }
}
class ExceptionController {
    constructor(exception) {
        this.exception = exception;
    }
    static success() {
        return new ExceptionController(null);
    }
    static exception(exception) {
        return new ExceptionController(exception);
    }
    get getKeyParameterException() {
        var _a, _b;
        return (_b = (_a = this.exception) === null || _a === void 0 ? void 0 : _a.key) !== null && _b !== void 0 ? _b : "";
    }
    isWhereNotEqualsNullParameterException() {
        return this.exception != null;
    }
}
class Result {
    constructor(parameter, exceptionController) {
        this.parameter = parameter;
        this.exceptionController = exceptionController;
    }
    static success(parameter) {
        return new Result(parameter, ExceptionController.success());
    }
    static exception(exception) {
        return new Result(null, ExceptionController.exception(exception));
    }
}
function debugPrint(text) {
    console.log(text);
}
function debugPrintException(text) {
    debugPrint("\x1B[31m" + text + "\x1b[0m");
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! library_architecture_mvvm_modify_javascript */ "./node_modules/library_architecture_mvvm_modify_javascript/dist/esm/index.js");

(0,library_architecture_mvvm_modify_javascript__WEBPACK_IMPORTED_MODULE_0__.debugPrint)("Hello World");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQ0FBZ0M7QUFDMUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7QUFDNUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7O1VDNVlBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOeUU7QUFFekUsdUZBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3FfdGVzdF9tYWluLy4vbm9kZV9tb2R1bGVzL2xpYnJhcnlfYXJjaGl0ZWN0dXJlX212dm1fbW9kaWZ5X2phdmFzY3JpcHQvZGlzdC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcV90ZXN0X21haW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcV90ZXN0X21haW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3FfdGVzdF9tYWluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcV90ZXN0X21haW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9xX3Rlc3RfbWFpbi8uL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEJhc2VEYXRhRm9yTmFtZWQge1xuICAgIGNvbnN0cnVjdG9yKGlzTG9hZGluZykge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGlzTG9hZGluZztcbiAgICAgICAgdGhpcy5leGNlcHRpb25Db250cm9sbGVyID0gRXhjZXB0aW9uQ29udHJvbGxlci5zdWNjZXNzKCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHRoaXNDbGFzcywgZXhjZXB0aW9uQ2xhc3MsIGtleSkge1xuICAgICAgICB0aGlzLnRoaXNDbGFzcyA9IHRoaXNDbGFzcztcbiAgICAgICAgdGhpcy5leGNlcHRpb25DbGFzcyA9IGV4Y2VwdGlvbkNsYXNzO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9XG4gICAgLy8vIENhbGwgdGhpcyBtZXRob2QgaW4gdGhlIGRlc2NlbmRhbnQgY29uc3RydWN0b3IgYXMgdGhlIGxhc3QgbGluZVxuICAgIGRlYnVnUHJpbnRFeGNlcHRpb25XaGVyZVRvU3RyaW5nUGFyYW1ldGVyc1RoaXNDbGFzc0FuZEV4Y2VwdGlvbkNsYXNzKCkge1xuICAgICAgICBkZWJ1Z1ByaW50RXhjZXB0aW9uKFwiXFxuPT09c3RhcnRfdG9fdHJhY2VfZXhjZXB0aW9uPT09XFxuXCIpO1xuICAgICAgICBkZWJ1Z1ByaW50RXhjZXB0aW9uKFwiV2hlcmVIYXBwZW5lZEV4Y2VwdGlvbihDbGFzcykgLS0+IFwiICsgdGhpcy50aGlzQ2xhc3MgKyBcIlxcblwiICtcbiAgICAgICAgICAgIFwiTmFtZUV4Y2VwdGlvbihDbGFzcykgLS0+IFwiICsgdGhpcy5leGNlcHRpb25DbGFzcyArIFwiXFxuXCIgK1xuICAgICAgICAgICAgXCJ0b1N0cmluZygpIC0tPiBcIiArIHRoaXMudG9TdHJpbmcoKSk7XG4gICAgICAgIGRlYnVnUHJpbnRFeGNlcHRpb24oXCJcXG49PT1lbmRfdG9fdHJhY2VfZXhjZXB0aW9uPT09XFxuXCIpO1xuICAgIH1cbn1cbmV4cG9ydCB2YXIgRW51bUd1aWx0eTtcbihmdW5jdGlvbiAoRW51bUd1aWx0eSkge1xuICAgIEVudW1HdWlsdHlbRW51bUd1aWx0eVtcImRldmVsb3BlclwiXSA9IDBdID0gXCJkZXZlbG9wZXJcIjtcbiAgICBFbnVtR3VpbHR5W0VudW1HdWlsdHlbXCJkZXZpY2VcIl0gPSAxXSA9IFwiZGV2aWNlXCI7XG4gICAgRW51bUd1aWx0eVtFbnVtR3VpbHR5W1widXNlclwiXSA9IDJdID0gXCJ1c2VyXCI7XG59KShFbnVtR3VpbHR5IHx8IChFbnVtR3VpbHR5ID0ge30pKTtcbmV4cG9ydCBjbGFzcyBMb2NhbEV4Y2VwdGlvbiBleHRlbmRzIEJhc2VFeGNlcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHRoaXNDbGFzcywgdmFsdWVXRW51bUd1aWx0eSwga2V5LCBtZXNzYWdlID0gXCJcIikge1xuICAgICAgICBzdXBlcih0aGlzQ2xhc3MsIFwiTG9jYWxFeGNlcHRpb25cIiwga2V5KTtcbiAgICAgICAgdGhpcy52YWx1ZVdFbnVtR3VpbHR5ID0gdmFsdWVXRW51bUd1aWx0eTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5kZWJ1Z1ByaW50RXhjZXB0aW9uV2hlcmVUb1N0cmluZ1BhcmFtZXRlcnNUaGlzQ2xhc3NBbmRFeGNlcHRpb25DbGFzcygpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiTG9jYWxFeGNlcHRpb24odmFsdWVXRW51bUd1aWx0eTogXCIgKyB0aGlzLnZhbHVlV0VudW1HdWlsdHkgKyBcIiwgXCIgK1xuICAgICAgICAgICAgXCJrZXk6IFwiICsgdGhpcy5rZXkgKyBcIiwgXCIgK1xuICAgICAgICAgICAgXCJtZXNzYWdlIChvcHRpb25hbCk6IFwiICsgdGhpcy5tZXNzYWdlICsgXCIpXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE5ldHdvcmtFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0aGlzQ2xhc3MsIGtleSwgc3RhdHVzQ29kZSwgbmFtZVN0YXR1c0NvZGUgPSBcIlwiLCBkZXNjcmlwdGlvblN0YXR1c0NvZGUgPSBcIlwiKSB7XG4gICAgICAgIHN1cGVyKHRoaXNDbGFzcywgXCJOZXR3b3JrRXhjZXB0aW9uXCIsIGtleSk7XG4gICAgICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gICAgICAgIHRoaXMubmFtZVN0YXR1c0NvZGUgPSBuYW1lU3RhdHVzQ29kZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblN0YXR1c0NvZGUgPSBkZXNjcmlwdGlvblN0YXR1c0NvZGU7XG4gICAgICAgIHRoaXMuZGVidWdQcmludEV4Y2VwdGlvbldoZXJlVG9TdHJpbmdQYXJhbWV0ZXJzVGhpc0NsYXNzQW5kRXhjZXB0aW9uQ2xhc3MoKTtcbiAgICB9XG4gICAgc3RhdGljIGZyb21LZXlBbmRTdGF0dXNDb2RlKHRoaXNDbGFzcywga2V5LCBzdGF0dXNDb2RlKSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdHVzQ29kZSkge1xuICAgICAgICAgICAgY2FzZSAyMDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAyMDEsIFwiMjAxIENyZWF0ZWRcIiwgXCJUaGUgcmVxdWVzdCBoYXMgYmVlbiBmdWxmaWxsZWQgYW5kIHJlc3VsdGVkIGluIGEgbmV3IHJlc291cmNlIGJlaW5nIGNyZWF0ZWQuXCIpO1xuICAgICAgICAgICAgY2FzZSAyMDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAyMDIsIFwiMjAyIEFjY2VwdGVkXCIsIFwiVGhlIHJlcXVlc3QgaGFzIGJlZW4gYWNjZXB0ZWQgZm9yIHByb2Nlc3NpbmcsIGJ1dCB0aGUgcHJvY2Vzc2luZyBoYXMgbm90IGJlZW4gY29tcGxldGVkLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMjAzOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMjAzLCBcIjIwMyBOb24tQXV0aG9yaXRhdGl2ZSBJbmZvcm1hdGlvblwiLCBcIlRoZSByZXR1cm5lZCBtZXRhSW5mb3JtYXRpb24gaW4gdGhlIGVudGl0eS1oZWFkZXIgaXMgbm90IHRoZSBkZWZpbml0aXZlIHNldCBhcyBhdmFpbGFibGUgZnJvbSB0aGUgb3JpZ2luIHNlcnZlciwgYnV0IGlzIGdhdGhlcmVkIGZyb20gYSBsb2NhbCBvciBhIHRoaXJkLXBhcnR5IGNvcHkuXCIpO1xuICAgICAgICAgICAgY2FzZSAyMDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAyMDQsIFwiMjA0IE5vIENvbnRlbnRcIiwgXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgdGhlIHJlcXVlc3QgYnV0IGRvZXMgbm90IG5lZWQgdG8gcmV0dXJuIGFuIGVudGl0eS1ib2R5LCBhbmQgbWlnaHQgd2FudCB0byByZXR1cm4gdXBkYXRlZCBtZXRhSW5mb3JtYXRpb24uXCIpO1xuICAgICAgICAgICAgY2FzZSAyMDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAyMDUsIFwiMjA1IFJlc2V0IENvbnRlbnRcIiwgXCJUaGUgc2VydmVyIGhhcyBmdWxmaWxsZWQgdGhlIHJlcXVlc3QgYW5kIHRoZSB1c2VyIGFnZW50IFNIT1VMRCByZXNldCB0aGUgZG9jdW1lbnQgdmlldyB3aGljaCBjYXVzZWQgdGhlIHJlcXVlc3QgdG8gYmUgc2VudC5cIik7XG4gICAgICAgICAgICBjYXNlIDIwNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDIwNiwgXCIyMDYgUGFydGlhbCBDb250ZW50XCIsIFwiVGhlIHNlcnZlciBoYXMgZnVsZmlsbGVkIHRoZSBwYXJ0aWFsIEdFVCByZXF1ZXN0IGZvciB0aGUgcmVzb3VyY2UuXCIpO1xuICAgICAgICAgICAgY2FzZSAzMDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAzMDAsIFwiMzAwIE11bHRpcGxlIENob2ljZXNcIiwgXCJVc2VyIChvciB1c2VyIGFnZW50KSBjYW4gc2VsZWN0IGEgcHJlZmVycmVkIHJlcHJlc2VudGF0aW9uIGFuZCByZWRpcmVjdCBpdHMgcmVxdWVzdCB0byB0aGF0IGxvY2F0aW9uLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzAxLCBcIjMwMSBNb3ZlZCBQZXJtYW5lbnRseVwiLCBcIlRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgaGFzIGJlZW4gYXNzaWduZWQgYSBuZXcgcGVybWFuZW50IFVSSSBhbmQgYW55IGZ1dHVyZSByZWZlcmVuY2VzIHRvIHRoaXMgcmVzb3VyY2UgU0hPVUxEIHVzZSBvbmUgb2YgdGhlIHJldHVybmVkIFVSSXMuXCIpO1xuICAgICAgICAgICAgY2FzZSAzMDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAzMDIsIFwiMzAyIEZvdW5kXCIsIFwiVGhlIHJlcXVlc3RlZCByZXNvdXJjZSByZXNpZGVzIHRlbXBvcmFyaWx5IHVuZGVyIGEgZGlmZmVyZW50IFVSSS5cIik7XG4gICAgICAgICAgICBjYXNlIDMwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDMwMywgXCIzMDMgU2VlIE90aGVyXCIsIFwiVGhlIHJlc3BvbnNlIHRvIHRoZSByZXF1ZXN0IGNhbiBiZSBmb3VuZCB1bmRlciBhIGRpZmZlcmVudCBVUkkgYW5kIFNIT1VMRCBiZSByZXRyaWV2ZWQgdXNpbmcgYSBHRVQgbWV0aG9kIG9uIHRoYXQgcmVzb3VyY2UuXCIpO1xuICAgICAgICAgICAgY2FzZSAzMDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAzMDQsIFwiMzA0IE5vdCBNb2RpZmllZFwiLCBcIklmIHRoZSBjbGllbnQgaGFzIHBlcmZvcm1lZCBhIGNvbmRpdGlvbmFsIEdFVCByZXF1ZXN0IGFuZCBhY2Nlc3MgaXMgYWxsb3dlZCwgYnV0IHRoZSBkb2N1bWVudCBoYXMgbm90IGJlZW4gbW9kaWZpZWQsIHRoZSBzZXJ2ZXIgU0hPVUxEIHJlc3BvbmQgd2l0aCB0aGlzIHN0YXR1cyBjb2RlLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzA1OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzA1LCBcIjMwNSBVc2UgUHJveHlcIiwgXCJUaGUgcmVxdWVzdGVkIHJlc291cmNlIE1VU1QgYmUgYWNjZXNzZWQgdGhyb3VnaCB0aGUgcHJveHkgZ2l2ZW4gYnkgdGhlIExvY2F0aW9uIGZpZWxkLlwiKTtcbiAgICAgICAgICAgIGNhc2UgMzA3OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgMzA3LCBcIjMwNyBUZW1wb3JhcnkgUmVkaXJlY3RcIiwgXCJUaGUgcmVxdWVzdGVkIHJlc291cmNlIHJlc2lkZXMgdGVtcG9yYXJpbHkgdW5kZXIgYSBkaWZmZXJlbnQgVVJJLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDAwLCBcIjQwMCBCYWQgUmVxdWVzdFwiLCBcIlRoZSByZXF1ZXN0IGNvdWxkIG5vdCBiZSB1bmRlcnN0b29kIGJ5IHRoZSBzZXJ2ZXIgZHVlIHRvIG1hbGZvcm1lZCBzeW50YXguXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDEsIFwiNDAxIFVuYXV0aG9yaXplZFwiLCBcIlRoZSByZXF1ZXN0IHJlcXVpcmVzIHVzZXIgYXV0aGVudGljYXRpb24uXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDMsIFwiNDAzIEZvcmJpZGRlblwiLCBcIlRoZSBzZXJ2ZXIgdW5kZXJzdG9vZCB0aGUgcmVxdWVzdCwgYnV0IGlzIHJlZnVzaW5nIHRvIGZ1bGZpbGwgaXQuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDQsIFwiNDA0IE5vdCBGb3VuZFwiLCBcIlRoZSBzZXJ2ZXIgaGFzIG5vdCBmb3VuZCBhbnl0aGluZyBtYXRjaGluZyB0aGUgUmVxdWVzdC1VUkkuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDUsIFwiNDA1IE1ldGhvZCBOb3QgQWxsb3dlZCcsJ1RoZSBtZXRob2Qgc3BlY2lmaWVkIGluIHRoZSBSZXF1ZXN0LUxpbmUgaXMgbm90IGFsbG93ZWQgZm9yIHRoZSByZXNvdXJjZSBpZGVudGlmaWVkIGJ5IHRoZSBSZXF1ZXN0LVVSSS5cIik7XG4gICAgICAgICAgICBjYXNlIDQwNjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwNiwgXCI0MDYgTm90IEFjY2VwdGFibGVcIiwgXCJUaGUgcmVzb3VyY2UgaWRlbnRpZmllZCBieSB0aGUgcmVxdWVzdCBpcyBvbmx5IGNhcGFibGUgb2YgZ2VuZXJhdGluZyByZXNwb25zZSBlbnRpdGllcyB3aGljaCBoYXZlIGNvbnRlbnQgY2hhcmFjdGVyaXN0aWNzIG5vdCBhY2NlcHRhYmxlIGFjY29yZGluZyB0byB0aGUgYWNjZXB0IGhlYWRlcnMgc2VudCBpbiB0aGUgcmVxdWVzdC5cIik7XG4gICAgICAgICAgICBjYXNlIDQwNzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwNywgXCI0MDcgUHJveHkgQXV0aGVudGljYXRpb24gUmVxdWlyZWRcIiwgXCJUaGlzIGNvZGUgaXMgc2ltaWxhciB0byA0MDEgKFVuYXV0aG9yaXplZCksIGJ1dCBpbmRpY2F0ZXMgdGhhdCB0aGUgY2xpZW50IG11c3QgZmlyc3QgYXV0aGVudGljYXRlIGl0c2VsZiB3aXRoIHRoZSBwcm94eS5cIik7XG4gICAgICAgICAgICBjYXNlIDQwODpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQwOCwgXCI0MDggUmVxdWVzdCBUaW1lb3V0XCIsIFwiVGhlIGNsaWVudCBkaWQgbm90IHByb2R1Y2UgYSByZXF1ZXN0IHdpdGhpbiB0aGUgdGltZSB0aGF0IHRoZSBzZXJ2ZXIgd2FzIHByZXBhcmVkIHRvIHdhaXQuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MDk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MDksIFwiNDA5IENvbmZsaWN0XCIsIFwiVGhlIHJlcXVlc3QgY291bGQgbm90IGJlIGNvbXBsZXRlZCBkdWUgdG8gYSBjb25mbGljdCB3aXRoIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSByZXNvdXJjZS5cIik7XG4gICAgICAgICAgICBjYXNlIDQxMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDQxMCwgXCI0MTAgR29uZVwiLCBcIlRoZSByZXF1ZXN0ZWQgcmVzb3VyY2UgaXMgbm8gbG9uZ2VyIGF2YWlsYWJsZSBhdCB0aGUgc2VydmVyIGFuZCBubyBmb3J3YXJkaW5nIGFkZHJlc3MgaXMga25vd24uXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTEsIFwiNDExIExlbmd0aCBSZXF1aXJlZFwiLCBcIlRoZSBzZXJ2ZXIgcmVmdXNlcyB0byBhY2NlcHQgdGhlIHJlcXVlc3Qgd2l0aG91dCBhIGRlZmluZWQgQ29udGVudC1MZW5ndGguXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTIsIFwiNDEyIFByZWNvbmRpdGlvbiBGYWlsZWRcIiwgXCJUaGUgcHJlY29uZGl0aW9uIGdpdmVuIGluIG9uZSBvciBtb3JlIG9mIHRoZSByZXF1ZXN0LWhlYWRlciBmaWVsZHMgZXZhbHVhdGVkIHRvIGZhbHNlIHdoZW4gaXQgd2FzIHRlc3RlZCBvbiB0aGUgc2VydmVyLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNDEzOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNDEzLCBcIjQxMyBSZXF1ZXN0IEVudGl0eSBUb28gTGFyZ2VcIiwgXCJUaGUgc2VydmVyIGlzIHJlZnVzaW5nIHRvIHByb2Nlc3MgYSByZXF1ZXN0IGJlY2F1c2UgdGhlIHJlcXVlc3QgZW50aXR5IGlzIGxhcmdlciB0aGFuIHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyBvciBhYmxlIHRvIHByb2Nlc3MuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTQsIFwiNDE0IFJlcXVlc3QtVVJJIFRvbyBMb25nXCIsIFwiVGhlIHNlcnZlciBpcyByZWZ1c2luZyB0byBzZXJ2aWNlIHRoZSByZXF1ZXN0IGJlY2F1c2UgdGhlIFJlcXVlc3QtVVJJIGlzIGxvbmdlciB0aGFuIHRoZSBzZXJ2ZXIgaXMgd2lsbGluZyB0byBpbnRlcnByZXQuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTUsIFwiNDE1IFVuc3VwcG9ydGVkIE1lZGlhIFR5cGVcIiwgXCJUaGUgc2VydmVyIGlzIHJlZnVzaW5nIHRvIHNlcnZpY2UgdGhlIHJlcXVlc3QgYmVjYXVzZSB0aGUgZW50aXR5IG9mIHRoZSByZXF1ZXN0IGlzIGluIGEgZm9ybWF0IG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHJlcXVlc3RlZCByZXNvdXJjZSBmb3IgdGhlIHJlcXVlc3RlZCBtZXRob2QuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTY6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTYsIFwiNDE2IFJlcXVlc3RlZCBSYW5nZSBOb3QgU2F0aXNmaWFibGVcIiwgXCJBIHNlcnZlciBTSE9VTEQgcmV0dXJuIGEgcmVzcG9uc2Ugd2l0aCB0aGlzIHN0YXR1cyBjb2RlIGlmIGEgcmVxdWVzdCBpbmNsdWRlZCBhIFJhbmdlIHJlcXVlc3QtaGVhZGVyIGZpZWxkIChzZWN0aW9uIDE0LjM1KSwgYW5kIG5vbmUgb2YgdGhlIHJhbmdlLXNwZWNpZmllciB2YWx1ZXMgaW4gdGhpcyBmaWVsZCBvdmVybGFwIHRoZSBjdXJyZW50IGV4dGVudCBvZiB0aGUgc2VsZWN0ZWQgcmVzb3VyY2UsIGFuZCB0aGUgcmVxdWVzdCBkaWQgbm90IGluY2x1ZGUgYW4gSWYtUmFuZ2UgcmVxdWVzdC1oZWFkZXIgZmllbGQuXCIpO1xuICAgICAgICAgICAgY2FzZSA0MTc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA0MTcsIFwiNDE3IEV4cGVjdGF0aW9uIEZhaWxlZFwiLCBcIlRoZSBleHBlY3RhdGlvbiBnaXZlbiBpbiBhbiBFeHBlY3QgcmVxdWVzdC1oZWFkZXIgZmllbGQgKHNlZSBzZWN0aW9uIDE0LjIwKSBjb3VsZCBub3QgYmUgbWV0IGJ5IHRoaXMgc2VydmVyLlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTAwLCBcIjUwMCBJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIiwgXCJUaGUgc2VydmVyIGVuY291bnRlcmVkIGFuIHVuZXhwZWN0ZWQgY29uZGl0aW9uIHdoaWNoIHByZXZlbnRlZCBpdCBmcm9tIGZ1bGZpbGxpbmcgdGhlIHJlcXVlc3QuXCIpO1xuICAgICAgICAgICAgY2FzZSA1MDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA1MDEsIFwiNTAxIE5vdCBJbXBsZW1lbnRlZFwiLCBcIlRoZSBzZXJ2ZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgZnVuY3Rpb25hbGl0eSBpbnRlcmZhY2VfZnVuY3Rpb25fdmlld19tb2RlbCB0byBmdWxmaWxsIHRoZSByZXF1ZXN0LlwiKTtcbiAgICAgICAgICAgIGNhc2UgNTAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTmV0d29ya0V4Y2VwdGlvbih0aGlzQ2xhc3MsIGtleSwgNTAyLCBcIjUwMiBCYWQgR2F0ZXdheVwiLCBcIlRoZSBzZXJ2ZXIsIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHksIHJlY2VpdmVkIGFuIGludmFsaWQgcmVzcG9uc2UgZnJvbSB0aGUgdXBzdHJlYW0gc2VydmVyIGl0IGFjY2Vzc2VkIGluIGF0dGVtcHRpbmcgdG8gZnVsZmlsbCB0aGUgcmVxdWVzdC5cIik7XG4gICAgICAgICAgICBjYXNlIDUwMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5ldHdvcmtFeGNlcHRpb24odGhpc0NsYXNzLCBrZXksIDUwMywgXCI1MDMgU2VydmljZSBVbmF2YWlsYWJsZVwiLCBcIlRoZSBzZXJ2ZXIgaXMgY3VycmVudGx5IHVuYWJsZSB0byBoYW5kbGUgdGhlIHJlcXVlc3QgZHVlIHRvIGEgdGVtcG9yYXJ5IG92ZXJsb2FkaW5nIG9yIG1haW50ZW5hbmNlIG9mIHRoZSBzZXJ2ZXIuXCIpO1xuICAgICAgICAgICAgY2FzZSA1MDQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA1MDQsIFwiNTA0IEdhdGV3YXkgVGltZW91dFwiLCBcIlRoZSBzZXJ2ZXIsIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHksIGRpZCBub3QgcmVjZWl2ZSBhIHRpbWVseSByZXNwb25zZSBmcm9tIHRoZSB1cHN0cmVhbSBzZXJ2ZXIgc3BlY2lmaWVkIGJ5IHRoZSBVUkkuXCIpO1xuICAgICAgICAgICAgY2FzZSA1MDU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCA1MDUsIFwiNTA1IEhUVFAgVmVyc2lvbiBOb3QgU3VwcG9ydGVkXCIsIFwiVGhlIHNlcnZlciBkb2VzIG5vdCBzdXBwb3J0LCBvciByZWZ1c2VzIHRvIHN1cHBvcnQsIHRoZSBIVFRQIHByb3RvY29sIHZlcnNpb24gdGhhdCB3YXMgdXNlZCBpbiB0aGUgcmVxdWVzdCBtZXNzYWdlLlwiKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXR3b3JrRXhjZXB0aW9uKHRoaXNDbGFzcywga2V5LCAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFwiTmV0d29ya0V4Y2VwdGlvbihrZXk6IFwiICsgdGhpcy5rZXkgKyBcIiwgXCIgK1xuICAgICAgICAgICAgXCJzdGF0dXNDb2RlOiBcIiArIHRoaXMuc3RhdHVzQ29kZSArIFwiLCBcIiArXG4gICAgICAgICAgICBcIm5hbWVTdGF0dXNDb2RlIChvcHRpb25hbCk6IFwiICsgdGhpcy5uYW1lU3RhdHVzQ29kZSArIFwiLCBcIiArXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uU3RhdHVzQ29kZSAob3B0aW9uYWwpOiBcIiArIHRoaXMuZGVzY3JpcHRpb25TdGF0dXNDb2RlICsgXCIpXCI7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VNb2RlbFdOYW1lZFdOYW1lZFdOYW1lZEl0ZXJhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saXN0TW9kZWxJdGVyYXRvciA9IG5ldyBBcnJheSgpO1xuICAgIH1cbiAgICBnZXRTb3J0ZWRMaXN0TW9kZWxGcm9tTmV3TGlzdE1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsSXRlcmF0b3IobmV3TGlzdE1vZGVsKSB7XG4gICAgICAgIGlmIChuZXdMaXN0TW9kZWwubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3RNb2RlbEl0ZXJhdG9yLnB1c2goLi4ubmV3TGlzdE1vZGVsKTtcbiAgICAgICAgY29uc3QgbmV3TGlzdE1vZGVsRklSU1QgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMubW92ZU5leHQoKSkge1xuICAgICAgICAgICAgY29uc3QgbmV3TW9kZWwgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgICAgICBuZXdMaXN0TW9kZWxGSVJTVC5wdXNoKG5ld01vZGVsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3TGlzdE1vZGVsRklSU1Q7XG4gICAgfVxuICAgIG1vdmVOZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0TW9kZWxJdGVyYXRvci5sZW5ndGggPiAwO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXNlTGlzdE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihsaXN0TW9kZWwpIHtcbiAgICAgICAgdGhpcy5saXN0TW9kZWwgPSBsaXN0TW9kZWw7XG4gICAgfVxuICAgIHNvcnRpbmdGcm9tTW9kZWxXTmFtZWRXTmFtZWRXTmFtZWRJdGVyYXRvclBhcmFtZXRlckxpc3RNb2RlbChtb2RlbFdOYW1lZFdOYW1lZFdOYW1lZEl0ZXJhdG9yKSB7XG4gICAgICAgIGNvbnN0IHNvcnRlZExpc3RNb2RlbEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWxJdGVyYXRvciA9IG1vZGVsV05hbWVkV05hbWVkV05hbWVkSXRlcmF0b3IuZ2V0U29ydGVkTGlzdE1vZGVsRnJvbU5ld0xpc3RNb2RlbFBhcmFtZXRlckxpc3RNb2RlbEl0ZXJhdG9yKHRoaXMubGlzdE1vZGVsKTtcbiAgICAgICAgdGhpcy5saXN0TW9kZWwubGVuZ3RoID4gMCA/IHRoaXMubGlzdE1vZGVsLnNwbGljZSgwLCB0aGlzLmxpc3RNb2RlbC5sZW5ndGgpIDogbnVsbDtcbiAgICAgICAgc29ydGVkTGlzdE1vZGVsRnJvbU5ld0xpc3RNb2RlbFBhcmFtZXRlckxpc3RNb2RlbEl0ZXJhdG9yLmxlbmd0aCA+IDAgPyB0aGlzLmxpc3RNb2RlbC5wdXNoKC4uLnNvcnRlZExpc3RNb2RlbEZyb21OZXdMaXN0TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWxJdGVyYXRvcikgOiBudWxsO1xuICAgIH1cbiAgICBpbnNlcnRGcm9tTmV3TW9kZWxQYXJhbWV0ZXJMaXN0TW9kZWwobmV3TW9kZWwpIHtcbiAgICAgICAgdGhpcy5saXN0TW9kZWwucHVzaChuZXdNb2RlbCk7XG4gICAgfVxuICAgIHVwZGF0ZUZyb21OZXdNb2RlbFBhcmFtZXRlckxpc3RNb2RlbChuZXdNb2RlbCkge1xuICAgICAgICBjb25zdCBmaW5kSW5kZXggPSB0aGlzLmxpc3RNb2RlbC5maW5kSW5kZXgoKGl0ZW1Nb2RlbCkgPT4gaXRlbU1vZGVsLnVuaXF1ZUlkID09IG5ld01vZGVsLnVuaXF1ZUlkKTtcbiAgICAgICAgdGhpcy5saXN0TW9kZWwuc3BsaWNlKGZpbmRJbmRleCwgMSwgbmV3TW9kZWwpO1xuICAgIH1cbiAgICBkZWxldGVGcm9tVW5pcXVlSWRCeU1vZGVsUGFyYW1ldGVyTGlzdE1vZGVsKHVuaXF1ZUlkQnlNb2RlbCkge1xuICAgICAgICBjb25zdCBmaW5kSW5kZXggPSB0aGlzLmxpc3RNb2RlbC5maW5kSW5kZXgoKGl0ZW1Nb2RlbCkgPT4gaXRlbU1vZGVsLnVuaXF1ZUlkID09IHVuaXF1ZUlkQnlNb2RlbCk7XG4gICAgICAgIHRoaXMubGlzdE1vZGVsLnNwbGljZShmaW5kSW5kZXgsIDEpO1xuICAgIH1cbiAgICBpbnNlcnRMaXN0RnJvbU5ld0xpc3RNb2RlbFBhcmFtZXRlckxpc3RNb2RlbChuZXdMaXN0TW9kZWwpIHtcbiAgICAgICAgdGhpcy5saXN0TW9kZWwucHVzaCguLi5uZXdMaXN0TW9kZWwpO1xuICAgIH1cbiAgICB1cGRhdGVMaXN0RnJvbU5ld0xpc3RNb2RlbFBhcmFtZXRlckxpc3RNb2RlbChuZXdMaXN0TW9kZWwpIHtcbiAgICAgICAgZm9yIChjb25zdCBuZXdJdGVtTW9kZWwgb2YgbmV3TGlzdE1vZGVsKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5kSW5kZXggPSB0aGlzLmxpc3RNb2RlbC5maW5kSW5kZXgoKGl0ZW1Nb2RlbCkgPT4gaXRlbU1vZGVsLnVuaXF1ZUlkID09IG5ld0l0ZW1Nb2RlbC51bmlxdWVJZCk7XG4gICAgICAgICAgICB0aGlzLmxpc3RNb2RlbC5zcGxpY2UoZmluZEluZGV4LCAxLCBuZXdJdGVtTW9kZWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlbGV0ZUxpc3RGcm9tTGlzdFVuaXF1ZUlkQnlNb2RlbFBhcmFtZXRlckxpc3RNb2RlbChsaXN0VW5pcXVlSWRCeU1vZGVsKSB7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbVVuaXF1ZUlkQnlNb2RlbCBvZiBsaXN0VW5pcXVlSWRCeU1vZGVsKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5kSW5kZXggPSB0aGlzLmxpc3RNb2RlbC5maW5kSW5kZXgoKGl0ZW1Nb2RlbCkgPT4gaXRlbU1vZGVsLnVuaXF1ZUlkID09IGl0ZW1VbmlxdWVJZEJ5TW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5saXN0TW9kZWwuc3BsaWNlKGZpbmRJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQmFzZU1vZGVsIHtcbiAgICBjb25zdHJ1Y3Rvcih1bmlxdWVJZCkge1xuICAgICAgICB0aGlzLnVuaXF1ZUlkID0gdW5pcXVlSWQ7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VOYW1lZFN0YXRlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRGVmYXVsdFN0YXRlIGV4dGVuZHMgQmFzZU5hbWVkU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGFGb3JOYW1lZCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzRGlzcG9zZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRhdGFGb3JOYW1lZCA9IGRhdGFGb3JOYW1lZDtcbiAgICB9XG4gICAgZGlzcG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNwb3NlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0Rpc3Bvc2UgPSB0cnVlO1xuICAgIH1cbiAgICBnZXQgZ2V0RGF0YUZvck5hbWVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhRm9yTmFtZWQ7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VOYW1lZFN0cmVhbVdTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIERlZmF1bHRTdHJlYW1XU3RhdGUgZXh0ZW5kcyBCYXNlTmFtZWRTdHJlYW1XU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKGRhdGFGb3JOYW1lZCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzRGlzcG9zZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRhdGFGb3JOYW1lZCA9IGRhdGFGb3JOYW1lZDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICAgIGdldCBnZXREYXRhRm9yTmFtZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFGb3JOYW1lZDtcbiAgICB9XG4gICAgbGlzdGVuU3RyZWFtRGF0YUZvck5hbWVkRnJvbUNhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IExvY2FsRXhjZXB0aW9uKFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVwiLCBFbnVtR3VpbHR5LmRldmVsb3BlciwgXCJEZWZhdWx0U3RyZWFtV1N0YXRlUVFMaXN0ZW5TdHJlYW1EYXRhRm9yTmFtZWRGcm9tQ2FsbGJhY2tcIiwgXCJBbHJlYWR5IGRpc3Bvc2VkIG9mXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIkRlZmF1bHRTdHJlYW1XU3RhdGVcIiwgRW51bUd1aWx0eS5kZXZlbG9wZXIsIFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVFRTGlzdGVuU3RyZWFtRGF0YUZvck5hbWVkRnJvbUNhbGxiYWNrXCIsIFwiRHVwbGljYXRlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gICAgbm90aWZ5U3RyZWFtRGF0YUZvck5hbWVkKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2NhbEV4Y2VwdGlvbihcIkRlZmF1bHRTdHJlYW1XU3RhdGVcIiwgRW51bUd1aWx0eS5kZXZlbG9wZXIsIFwiRGVmYXVsdFN0cmVhbVdTdGF0ZVFRTm90aWZ5U3RyZWFtRGF0YUZvck5hbWVkXCIsIFwiQWxyZWFkeSBkaXNwb3NlZCBvZlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjayA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTG9jYWxFeGNlcHRpb24oXCJEZWZhdWx0U3RyZWFtV1N0YXRlXCIsIEVudW1HdWlsdHkuZGV2ZWxvcGVyLCBcIkRlZmF1bHRTdHJlYW1XU3RhdGVRUU5vdGlmeVN0cmVhbURhdGFGb3JOYW1lZFwiLCBcIlN0cmVhbSBoYXMgbm8gbGlzdGVuZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLmRhdGFGb3JOYW1lZCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRlbXBDYWNoZVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRlbXBDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy50ZW1wQ2FjaGVXTGlzdEFjdGlvbiA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgc3RhdGljIGNsZWFyVGVtcENhY2hlUGFybWV0ZXJJbnN0YW5jZSgpIHtcbiAgICAgICAgY29uc3QgdGVtcENhY2hlID0gdGhpcy5pbnN0YW5jZS50ZW1wQ2FjaGU7XG4gICAgICAgIHRlbXBDYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICBzdGF0aWMgY2xvc2VTdHJlYW1Gcm9tS2V5VGVtcENhY2hlUGFybWV0ZXJJbnN0YW5jZShrZXlUZW1wQ2FjaGUpIHtcbiAgICAgICAgY29uc3QgdGVtcENhY2hlV0xpc3RBY3Rpb24gPSB0aGlzLmluc3RhbmNlLnRlbXBDYWNoZVdMaXN0QWN0aW9uO1xuICAgICAgICBpZiAoIXRlbXBDYWNoZVdMaXN0QWN0aW9uLmhhcyhrZXlUZW1wQ2FjaGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ2V0ID0gdGVtcENhY2hlV0xpc3RBY3Rpb24uZ2V0KGtleVRlbXBDYWNoZSk7XG4gICAgICAgIGdldCA9PT0gbnVsbCB8fCBnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdldC5zcGxpY2UoMCwgZ2V0Lmxlbmd0aCk7XG4gICAgfVxuICAgIHN0YXRpYyBjbG9zZVN0cmVhbUZyb21MaXN0S2V5VGVtcENhY2hlUGFybWV0ZXJJbnN0YW5jZShsaXN0S2V5VGVtcENhY2hlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZVdMaXN0QWN0aW9uID0gdGhpcy5pbnN0YW5jZS50ZW1wQ2FjaGVXTGlzdEFjdGlvbjtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtS2V5VGVtcENhY2hlIG9mIGxpc3RLZXlUZW1wQ2FjaGUpIHtcbiAgICAgICAgICAgIGlmICghdGVtcENhY2hlV0xpc3RBY3Rpb24uaGFzKGl0ZW1LZXlUZW1wQ2FjaGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZ2V0ID0gdGVtcENhY2hlV0xpc3RBY3Rpb24uZ2V0KGl0ZW1LZXlUZW1wQ2FjaGUpO1xuICAgICAgICAgICAgZ2V0ID09PSBudWxsIHx8IGdldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ2V0LnNwbGljZSgwLCBnZXQubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgY2xvc2VTdHJlYW1zUGFyYW1ldGVySW5zdGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZVdMaXN0QWN0aW9uID0gdGhpcy5pbnN0YW5jZS50ZW1wQ2FjaGVXTGlzdEFjdGlvbjtcbiAgICAgICAgZm9yIChjb25zdCBbLCB2YWx1ZV0gb2YgdGVtcENhY2hlV0xpc3RBY3Rpb24pIHtcbiAgICAgICAgICAgIHZhbHVlLnNwbGljZSgwLCB2YWx1ZS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldEZyb21LZXlUZW1wQ2FjaGVQYXJhbWV0ZXJUZW1wQ2FjaGUoa2V5VGVtcENhY2hlKSB7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZSA9IHRoaXMudGVtcENhY2hlO1xuICAgICAgICBpZiAoIXRlbXBDYWNoZS5oYXMoa2V5VGVtcENhY2hlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IExvY2FsRXhjZXB0aW9uKFwiVGVtcENhY2hlU2VydmljZVwiLCBFbnVtR3VpbHR5LmRldmVsb3Blciwga2V5VGVtcENhY2hlLCBcIk5vIGV4aXN0cyBrZXlcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXBDYWNoZS5nZXQoa2V5VGVtcENhY2hlKTtcbiAgICB9XG4gICAgbGlzdGVuU3RyZWFtRnJvbUtleVRlbXBDYWNoZUFuZENhbGxiYWNrUGFyYW1ldGVyT25lKGtleVRlbXBDYWNoZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3QgdGVtcENhY2hlV0xpc3RBY3Rpb24gPSB0aGlzLnRlbXBDYWNoZVdMaXN0QWN0aW9uO1xuICAgICAgICBpZiAoIXRlbXBDYWNoZVdMaXN0QWN0aW9uLmhhcyhrZXlUZW1wQ2FjaGUpKSB7XG4gICAgICAgICAgICB0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5zZXQoa2V5VGVtcENhY2hlLCBuZXcgQXJyYXkoKSk7XG4gICAgICAgICAgICAoX2EgPSB0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5nZXQoa2V5VGVtcENhY2hlKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIChfYiA9IHRlbXBDYWNoZVdMaXN0QWN0aW9uLmdldChrZXlUZW1wQ2FjaGUpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICAgIHVwZGF0ZUZyb21LZXlUZW1wQ2FjaGVBbmRWYWx1ZVBhcmFtZXRlclRlbXBDYWNoZShrZXlUZW1wQ2FjaGUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMudGVtcENhY2hlLnNldChrZXlUZW1wQ2FjaGUsIHZhbHVlKTtcbiAgICB9XG4gICAgdXBkYXRlV2hlcmVTdHJlYW1Ob3RpZmljYXRpb25Jc1Bvc3NpYmxlRnJvbUtleVRlbXBDYWNoZUFuZFZhbHVlUGFyYW1ldGVyVGVtcENhY2hlKGtleVRlbXBDYWNoZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGcm9tS2V5VGVtcENhY2hlQW5kVmFsdWVQYXJhbWV0ZXJUZW1wQ2FjaGUoa2V5VGVtcENhY2hlLCB2YWx1ZSk7XG4gICAgICAgIGNvbnN0IHRlbXBDYWNoZVdMaXN0QWN0aW9uID0gdGhpcy50ZW1wQ2FjaGVXTGlzdEFjdGlvbjtcbiAgICAgICAgaWYgKCF0ZW1wQ2FjaGVXTGlzdEFjdGlvbi5oYXMoa2V5VGVtcENhY2hlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdldCA9IHRlbXBDYWNoZVdMaXN0QWN0aW9uLmdldChrZXlUZW1wQ2FjaGUpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW1HZXQgb2YgZ2V0KSB7XG4gICAgICAgICAgICBpdGVtR2V0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWxldGVGcm9tS2V5VGVtcENhY2hlUGFyYW1ldGVyVGVtcENhY2hlKGtleVRlbXBDYWNoZSkge1xuICAgICAgICB0aGlzLnRlbXBDYWNoZS5kZWxldGUoa2V5VGVtcENhY2hlKTtcbiAgICB9XG59XG5UZW1wQ2FjaGVTZXJ2aWNlLmluc3RhbmNlID0gbmV3IFRlbXBDYWNoZVNlcnZpY2UoKTtcbmV4cG9ydCB2YXIgRW51bVJXVE1vZGU7XG4oZnVuY3Rpb24gKEVudW1SV1RNb2RlKSB7XG4gICAgRW51bVJXVE1vZGVbRW51bVJXVE1vZGVbXCJyZWxlYXNlXCJdID0gMF0gPSBcInJlbGVhc2VcIjtcbiAgICBFbnVtUldUTW9kZVtFbnVtUldUTW9kZVtcInRlc3RcIl0gPSAxXSA9IFwidGVzdFwiO1xufSkoRW51bVJXVE1vZGUgfHwgKEVudW1SV1RNb2RlID0ge30pKTtcbmV4cG9ydCBjbGFzcyBOYW1lZENhbGxiYWNrIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJXVE1vZGUge1xuICAgIGNvbnN0cnVjdG9yKGVudW1SV1RNb2RlLCBsaXN0TmFtZWRDYWxsYmFja1dSZWxlYXNlLCBsaXN0TmFtZWRDYWxsYmFja1dUZXN0KSB7XG4gICAgICAgIHRoaXMuZW51bVJXVE1vZGUgPSBlbnVtUldUTW9kZTtcbiAgICAgICAgdGhpcy5tYXBTdHJpbmdXTmFtZWRDYWxsYmFja1dSZWxlYXNlID0gUldUTW9kZS5nZXRNYXBTdHJpbmdXTmFtZWRDYWxsYmFja0Zyb21MaXN0TmFtZWRDYWxsYmFjayhsaXN0TmFtZWRDYWxsYmFja1dSZWxlYXNlKTtcbiAgICAgICAgdGhpcy5tYXBTdHJpbmdXTmFtZWRDYWxsYmFja1dUZXN0ID0gUldUTW9kZS5nZXRNYXBTdHJpbmdXTmFtZWRDYWxsYmFja0Zyb21MaXN0TmFtZWRDYWxsYmFjayhsaXN0TmFtZWRDYWxsYmFja1dUZXN0KTtcbiAgICB9XG4gICAgc3RhdGljIGdldE1hcFN0cmluZ1dOYW1lZENhbGxiYWNrRnJvbUxpc3ROYW1lZENhbGxiYWNrKGxpc3ROYW1lZENhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IG1hcFN0cmluZ1dOYW1lZENhbGxiYWNrID0gbmV3IE1hcCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW1OYW1lZENhbGxiYWNrIG9mIGxpc3ROYW1lZENhbGxiYWNrKSB7XG4gICAgICAgICAgICBtYXBTdHJpbmdXTmFtZWRDYWxsYmFjay5zZXQoaXRlbU5hbWVkQ2FsbGJhY2submFtZSwgaXRlbU5hbWVkQ2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXBTdHJpbmdXTmFtZWRDYWxsYmFjaztcbiAgICB9XG4gICAgZ2V0TmFtZWRDYWxsYmFja0Zyb21OYW1lKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tXaGVyZVNlbGVjdE1vZFBhcmFtZXRlcnNUaHJlZSA9IHRoaXMuZ2V0TWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tXaGVyZVNlbGVjdE1vZFBhcmFtZXRlcnNUaHJlZTtcbiAgICAgICAgaWYgKCFtYXBTdHJpbmdXTmFtZWRDYWxsYmFja1doZXJlU2VsZWN0TW9kUGFyYW1ldGVyc1RocmVlLmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IExvY2FsRXhjZXB0aW9uKFwiUldUTW9kZVwiLCBFbnVtR3VpbHR5LmRldmVsb3BlciwgXCJSV1RNb2RlUVFHZXROYW1lZENhbGxiYWNrRnJvbU5hbWVcIiwgXCJubyBleGlzdHMga2V5OiBcIiArIG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXBTdHJpbmdXTmFtZWRDYWxsYmFja1doZXJlU2VsZWN0TW9kUGFyYW1ldGVyc1RocmVlLmdldChuYW1lKTtcbiAgICB9XG4gICAgZ2V0IGdldE1hcFN0cmluZ1dOYW1lZENhbGxiYWNrV2hlcmVTZWxlY3RNb2RQYXJhbWV0ZXJzVGhyZWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVudW1SV1RNb2RlID09IEVudW1SV1RNb2RlLnJlbGVhc2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcFN0cmluZ1dOYW1lZENhbGxiYWNrV1JlbGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWFwU3RyaW5nV05hbWVkQ2FsbGJhY2tXVGVzdDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRXhjZXB0aW9uQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoZXhjZXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZXhjZXB0aW9uID0gZXhjZXB0aW9uO1xuICAgIH1cbiAgICBzdGF0aWMgc3VjY2VzcygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFeGNlcHRpb25Db250cm9sbGVyKG51bGwpO1xuICAgIH1cbiAgICBzdGF0aWMgZXhjZXB0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgICByZXR1cm4gbmV3IEV4Y2VwdGlvbkNvbnRyb2xsZXIoZXhjZXB0aW9uKTtcbiAgICB9XG4gICAgZ2V0IGdldEtleVBhcmFtZXRlckV4Y2VwdGlvbigpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHRoaXMuZXhjZXB0aW9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eua2V5KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBcIlwiO1xuICAgIH1cbiAgICBpc1doZXJlTm90RXF1YWxzTnVsbFBhcmFtZXRlckV4Y2VwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhjZXB0aW9uICE9IG51bGw7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJlc3VsdCB7XG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVyLCBleGNlcHRpb25Db250cm9sbGVyKSB7XG4gICAgICAgIHRoaXMucGFyYW1ldGVyID0gcGFyYW1ldGVyO1xuICAgICAgICB0aGlzLmV4Y2VwdGlvbkNvbnRyb2xsZXIgPSBleGNlcHRpb25Db250cm9sbGVyO1xuICAgIH1cbiAgICBzdGF0aWMgc3VjY2VzcyhwYXJhbWV0ZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXN1bHQocGFyYW1ldGVyLCBFeGNlcHRpb25Db250cm9sbGVyLnN1Y2Nlc3MoKSk7XG4gICAgfVxuICAgIHN0YXRpYyBleGNlcHRpb24oZXhjZXB0aW9uKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVzdWx0KG51bGwsIEV4Y2VwdGlvbkNvbnRyb2xsZXIuZXhjZXB0aW9uKGV4Y2VwdGlvbikpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z1ByaW50KHRleHQpIHtcbiAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z1ByaW50RXhjZXB0aW9uKHRleHQpIHtcbiAgICBkZWJ1Z1ByaW50KFwiXFx4MUJbMzFtXCIgKyB0ZXh0ICsgXCJcXHgxYlswbVwiKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZGVidWdQcmludCB9IGZyb20gXCJsaWJyYXJ5X2FyY2hpdGVjdHVyZV9tdnZtX21vZGlmeV9qYXZhc2NyaXB0XCI7XHJcblxyXG5kZWJ1Z1ByaW50KFwiSGVsbG8gV29ybGRcIik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9