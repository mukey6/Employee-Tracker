const db = require('../db/connection')
const inquirer = require("inquirer");


function department(){
    console.log('youve made it down here')
   const sql = `SELECT * FROM department`;

   db.query(sql, (err, data)=>{
     if(err)throw err;
     console.log(data)
    //  init()
   })
}

async function addDepartment() {
    const newDept = await inquirer.prompt([
      {
        type: "input",
        name: "departmentName",
        message: "what is the name of the department?",
      },
    ]);
    console.log(newDept)
const sql = `INSERT INTO department (name)
VALUES (?)`
db.query(sql, newDept.departmentName, (err, data)=>{
    if(err)throw err;
    console.log('dept added')
})
db.end
  }

module.exports= {
    department, addDepartment
}