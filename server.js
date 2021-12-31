const inquirer = require("inquirer");
// const db = require('./db/connection')
const {role, addRole} = require('./lib/role')
const {department, addDepartment} = require('./lib/department')
const {employee, addEmployee} = require('./lib/employee')


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
        "end"
      ],
    },
  ]);

  if (answers.options === "view all departments") {
    department()
    .then(init())
    console.log('after dept')
  } else if (answers.options === "view all roles") {
    role()

  } else if (answers.options === "view all employees") {
    employee()
  } else if (answers.options === "add a department") {
    addDepartment();
  } else if (answers.options === "add a role") {
    addRole();
  } else if (answers.options === "add an employee") {
    addEmployee();
  } else if (answers.options === "update an employee role") {
  }else {
    db.end();
    // return;
  }
}


// function department(){
//  const sql = `SELECT * FROM department`;

//  db.query(sql, (err, data)=>{
//    if(err)throw err;
//    console.table(data)
//   //  init()
//   })
// }

// async function addDepartment() {
//   const newDept = await inquirer.prompt([
//     {
//       type: "input",
//       name: "departmentName",
//       message: "what is the name of the department?",
//     },
//   ]);
  
//   console.log(newDept)
//   const {departmentName} = newDept
// const sql = `INSERT INTO department (name)
// VALUES (?)`
// db.query(sql, departmentName, (err, data)=>{
//   if(err)throw err;
//   console.log('dept added', data)
// })
// // db.end
// department()
// }


init();

// module.exports= init;