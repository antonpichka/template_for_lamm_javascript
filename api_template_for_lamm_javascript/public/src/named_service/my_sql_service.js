const mysql = require("mysql");

class MySQLService {
    static instance = new MySQLService();
    #pool;

    constructor() {
        if(MySQLService.instance != null) {
            return MySQLService.instance;
        }
    }

    get getParameterPool() {
        if(this.#pool != null) {
            return this.#pool;
        }
        this.#pool = mysql.createPool({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            connectionLimit: process.env.DB_CONNECTION_LIMIT
        });
        return this.#pool;
    }
}

module.exports = MySQLService;