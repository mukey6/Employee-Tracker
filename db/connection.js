const mysql = require("mysql2");

// Connect to database
// async function connect (){

  const db =  mysql.createConnection(
      {
        host: "localhost",
        // Your MySQL username,
        user: "root",
        // Your MySQL password
        password: "",
        database: "employees",
      }
    );
        // return db
console.log('connected to employee database')
// }

  module.exports = db;