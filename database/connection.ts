import mysql from "mysql2/promise";
import dbConfig from "../config/db.conf";

export default await mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT ? parseInt(dbConfig.PORT, 10) : 3306,
});
