const db = require('../db/connection')
const inquirer = require("inquirer");
// const init = require('../server')
// init.init()

async function department(){
  // console.clear()
   const sql = `SELECT * FROM department`;
// const [rows, fields] = await db.execute(sql)
// console.log(rows)
// console.log(fields)
    db.query(sql, (err, data)=>{
     if(err)throw err;
     console.table(data)
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
    const {departmentName} = newDept
const sql = `INSERT INTO department (name)
VALUES (?)`
db.query(sql, departmentName, (err, data)=>{
    if(err)throw err;
})
// db.end
department()
  }

module.exports= {
    department, addDepartment
}