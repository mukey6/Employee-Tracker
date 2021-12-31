const db = require('../db/connection')
const inquirer = require("inquirer");
const {init} = require('../server')

function role(){
  console.log('`````', init)
    const sql = `SELECT * FROM role`
 
    db.query(sql, (err, data)=>{
     if(err)throw err;
     console.table(data)
    //  init()
   })
 }

 async function addRole() {
    const newRole = await inquirer.prompt([
      {
        type: "input",
        name: "roleName",
        message: "what is the name of the role",
      },
      {
        type: "input",
        name: "salary",
        message: "what is the salary for the role",
      },
      {
        type: "input",
        name: "deptName",
        message: "which department does this role belong to?",
      },
    ]);
    const {roleName, salary, deptName} = newRole
    const sql = `INSERT INTO role (title, salary, department_id)
VALUES (?,?,?)    `
// for dept name, gotta connect dept id to name
db.query(sql, [roleName, salary, deptName], (err, data)=>{
    if(err) throw err;
})
  }

module.exports={role, addRole}