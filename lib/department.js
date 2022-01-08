
import {conn} from "../db/connection.js"
import inquirer from "inquirer";
import table from 'console.table';

// const init = require('../server')
// init.init()


async function department() {
    const sql = `SELECT * FROM department`;
  
    const [rows, fields] = await (await conn).execute(sql);
    console.table(rows);
    // init();
    return;
  }
  
  async function addDepartment() {
    const newDept = await inquirer.prompt([
      {
        type: "input",
        name: "departmentName",
        message: "what is the name of the department?",
      },
    ]);
  
    console.log(newDept);
    const { departmentName } = newDept;
    const sql = `INSERT INTO department (name)
  VALUES (?)`;
const [addedDept] = await (await conn).execute(sql,[departmentName])
     console.log('added', addedDept)
    // conn.end
    // department();
  }




export {department, addDepartment}