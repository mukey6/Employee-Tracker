const inquirer = require("inquirer");
const db = require('./db/connection')
const mysql = require("mysql2");
const {role, addRole} = require('./lib/role')
const {department, addDepartment} = require('./lib/department')
const {employee, addEmployee} = require('./lib/employee')
// Connect to database
// const db = mysql.createConnection(
//     {
//       host: "localhost",
//       // Your MySQL username,
//       user: "root",
//       // Your MySQL password
//       password: "",
//       database: "employees",
//     },
//     console.log("Connected to the election database.")
//   );

// db.connect(function(error){
//   if(error){
//     throw error;
//   }else
//   console.log('you are connect to employee database')

// })
async function init() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "options",
      message: "What would you like to do?",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role",
      ],
    },
  ]);

  if (answers.options === "view all departments") {
    console.log(answers, "dept");
    department()
  } else if (answers.options === "view all roles") {
    console.log(answers, "role");
    role()
  } else if (answers.options === "view all employees") {
    console.log(answers, "employee");
    employee()
  } else if (answers.options === "add a department") {
    console.log(answers, "add dept");
    addDepartment();
  } else if (answers.options === "add a role") {
    console.log(answers, "add role");
    addRole();
  } else if (answers.options === "add an employee") {
    console.log(answers, "add employee");
    addEmployee();
  } else if (answers.options === "update an employee role") {
    console.log(answers, "update");
  }
}






init();
