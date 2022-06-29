const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "admin",
  port: "3306",
  database: "database",
});

const poolPromise = pool.promise();

module.exports = poolPromise;