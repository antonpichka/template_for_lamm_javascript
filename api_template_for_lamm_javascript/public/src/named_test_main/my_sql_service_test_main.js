const { debugPrint } = require("library_architecture_mvvm_modify_javascript");
const MySQLService = require("../named_service/my_sql_service.js");
const KeysMySQLServiceUtility = require("../named_utility/keys_my_sql_service_utility.js");

async function main() {
    const q = "q";
    const mySQLService = MySQLService.instance;
    try {
        const rows = await mySQLService.getQueryFromSqlParameterConnection(`SELECT * FROM ${KeysMySQLServiceUtility.user} WHERE ${KeysMySQLServiceUtility.userQQUsername} LIKE '${q}%'`);
        const listMap = rows.map(row => row)
        for(const itemMap of listMap) {
            debugPrint(`${itemMap[KeysMySQLServiceUtility.userQQId]}---${itemMap[KeysMySQLServiceUtility.userQQUniqueId]}---${itemMap[KeysMySQLServiceUtility.userQQUsername]}---${itemMap[KeysMySQLServiceUtility.userQQCreatedAt]}`);
        }
    } catch(e) {
        debugPrint(e);
    } finally {
        mySQLService.closeParameterConnection();
    }
}
main();