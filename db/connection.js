const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
      host: "localhost",
      // Your MySQL username,
      user: "root",
      // Your MySQL password
      password: "",
      database: "employees",
    },
    console.log("Connected to the election database.")
  );
  db.connect(function(error){
    if(error){
      throw error;
    }else
    console.log('you are connect to employee database')
  
  })

  module.exports = db;