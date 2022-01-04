const mysql = require("mysql2/promise");

const conn = mysql.createConnection({
  host: "localhost",
  // Your MySQL username,
  user: "root",
  // Your MySQL password
  password: "",
  database: "employees",
});

module.exports = conn;
