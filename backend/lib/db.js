const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "admin",
  port: "3306",
  database: "database",
  // waitForConnections: true,
  // connectionLimit: 10,
  // queueLimit: 0
});

const poolPromise = pool.promise();

module.exports = poolPromise;