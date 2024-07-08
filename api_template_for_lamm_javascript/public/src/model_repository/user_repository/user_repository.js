const { BaseModelRepository, EnumGuilty, LocalException, Result, debugPrint } = require("library_architecture_mvvm_modify_javascript");
const User = require("../../model/user/user.js");
const ListUser = require("../../model/user/list_user.js");
const MySQLService = require("../../named_service/my_sql_service.js");
const KeysMySQLServiceUtility = require("../../named_utility/keys_my_sql_service_utility.js");
const ReadyDataUtility = require("../../named_utility/ready_data_utility.js");

class UserRepository extends BaseModelRepository {
    _mySQLService = MySQLService.instance;

    constructor() {
        super();
    }

    _getBaseModelFromMapAndListKeys(map, listKeys) {
        return new User(
            this.getSafeValueWhereUsedInMethodGetModelFromMapAndListKeysAndIndexAndDefaultValue(map, listKeys, 0, ""),
            this.getSafeValueWhereUsedInMethodGetModelFromMapAndListKeysAndIndexAndDefaultValue(map, listKeys, 1, 0),
            this.getSafeValueWhereUsedInMethodGetModelFromMapAndListKeysAndIndexAndDefaultValue(map, listKeys, 2, ""),
            this.getSafeValueWhereUsedInMethodGetModelFromMapAndListKeysAndIndexAndDefaultValue(map, listKeys, 3, new Date()));
    }

    _getBaseListModelFromListModel(listModel) {
        return new ListUser(listModel);
    }
    
    async getListUserWhereUsedSearchFromQParameterMySQLService(q) {
        return this.getModeCallbackFromReleaseCallbackAndTestCallbackParameterEnumRWTMode(
            this._getListUserWhereUsedSearchFromQParameterMySQLServiceWReleaseCallback,
            this._getListUserWhereUsedSearchFromQParameterMySQLServiceWTestCallback)(q);
    }

    _getListUserWhereUsedSearchFromQParameterMySQLServiceWReleaseCallback = async (q) => {
        try {
            const rows = await this._mySQLService.getQueryFromSqlParameterConnection(`SELECT * FROM ${KeysMySQLServiceUtility.user} WHERE ${KeysMySQLServiceUtility.userQQUsername} LIKE '%${q}%'`);
            const listMap = rows.map(row => row)
            const listModel = new Array();
            for(const itemMap of listMap) {
                listModel.push(this._getBaseModelFromMapAndListKeys(
                    this._getListUserWhereUsedSearchFromQParameterMySQLServiceWConvertedToMap(itemMap),
                    this._getListUserWhereUsedSearchFromQParameterMySQLServiceWListKeys()
                ));
            }
            return Result.success(this._getBaseListModelFromListModel(listModel));
        } catch(exception) {
            return Result.exception(new LocalException("UserRepository",EnumGuilty.device,ReadyDataUtility.unknown,exception));
        }
    };

    _getListUserWhereUsedSearchFromQParameterMySQLServiceWTestCallback = async (q) => {
        const map = new Map(
            [
                ["users",
                    [
                        {
                            "id" : 1,
                            "unique_id" : "b5f9b56a-be60-4732-ba75-e8f4baac8c39",
                            "username" : q,
                            "created_at" : new Date()
                        },
                        {
                            "id" : 2,
                            "unique_id" : "d1fe0703-5a4a-469e-9007-734af71224a6",
                            "username" : q+"w",
                            "created_at" : new Date()
                        },
                    ],
                ],
            ]);
            const listModel = new Array();
            const users = map.get("users");
            for(const user of users) {
                listModel.push(this._getBaseModelFromMapAndListKeys(
                    this._getListUserWhereUsedSearchFromQParameterMySQLServiceWConvertedToMap(user),
                    this._getListUserWhereUsedSearchFromQParameterMySQLServiceWListKeys()
                ));
            }
            await new Promise(resolve => setTimeout(resolve,1000));
            return Result.success(this._getBaseListModelFromListModel(listModel));
    };
    
    _getListUserWhereUsedSearchFromQParameterMySQLServiceWConvertedToMap(data) {
        return new Map([
            [KeysMySQLServiceUtility.userQQUniqueId, data[KeysMySQLServiceUtility.userQQUniqueId]],
            [KeysMySQLServiceUtility.userQQId, data[KeysMySQLServiceUtility.userQQId]], 
            [KeysMySQLServiceUtility.userQQUsername, data[KeysMySQLServiceUtility.userQQUsername]],
            [KeysMySQLServiceUtility.userQQCreatedAt, data[KeysMySQLServiceUtility.userQQCreatedAt]]
        ]);
    }
    
    _getListUserWhereUsedSearchFromQParameterMySQLServiceWListKeys() {
        return [ 
            KeysMySQLServiceUtility.userQQUniqueId,
            KeysMySQLServiceUtility.userQQId,
            KeysMySQLServiceUtility.userQQUsername,
            KeysMySQLServiceUtility.userQQCreatedAt
        ];
    }
}

module.exports = UserRepository;