const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

class MySQLService {
    static instance = new MySQLService();
    #connection;

    constructor() {
        if(MySQLService.instance != null) {
            return MySQLService.instance;
        }
        this.#connection = mysql.createPool({
            host: process.env.MY_SQL_SERVICE_HOST,
            port: process.env.MY_SQL_SERVICE_PORT,
            user: process.env.MY_SQL_SERVICE_USER,
            password: process.env.MY_SQL_SERVICE_PASSWORD,
            database: process.env.MY_SQL_SERVICE_NAME,
            connectionLimit: process.env.MY_SQL_SERVICE_CONNECTION_LIMIT
        });
    }

    getQueryFromSqlParameterConnection(sql) {
        return new Promise((resolve, reject) => {
            this.#connection.query(sql,[], (err, rows) => {
                if (err)
                  return reject(err);
                resolve(rows);
              });
        });
    }

    closeParameterConnection() {
        this.#connection.end();
    }
}

module.exports = MySQLService;