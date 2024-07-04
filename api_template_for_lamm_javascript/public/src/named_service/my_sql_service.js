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
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            connectionLimit: process.env.DB_CONNECTION_LIMIT
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