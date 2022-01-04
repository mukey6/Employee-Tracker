// const db = require('../db/connection')
// const inquirer = require("inquirer");

// function employee(){
//     const sql = `SELECT * FROM employee`
//     db.query(sql, (err, data)=>{
//       if(err)throw err;
//       console.log(data)
//     //   init()
//     })
//  }

// async function addEmployee() {
//   const addEmployeeAnswer = await inquirer.prompt([
//     {
//       type: "input",
//       name: "firstName",
//       message: "what is the employees first name",
//     },
//     {
//       type: "input",
//       name: "lastName",
//       message: "what is the employees last name",
//     },
//     {
//       type: "input",
//       name: "role",
//       message: "what is the employees role",
//     },
//     {
//       type: "input",
//       name: "managerName",
//       message: "what is the employees manager name",
//     },
//   ]);
// const {firstName, lastName, role, managerName}= addEmployeeAnswer
//   const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
// VALUES (?, ?, ?, ?) `;

// // this is workinmg with numbers for role and manager name
// db.query(sql, [firstName, lastName, role, managerName], (error, data)=>{
//   if(error)throw error;
//   console.table(data)
// })
// }

// module.exports={
//     employee, addEmployee
// }