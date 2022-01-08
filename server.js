import inquirer from "inquirer";
import {conn} from "./db/connection.js"
import {role, addRole} from './lib/role.js'
import {department, addDepartment} from './lib/department.js'
import {employee, addEmployee} from './lib/employee.js'

import table from 'console.table';



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
        "end",
      ],
    },
  ]);

  if (answers.options === "view all departments") {
    await department();
    init()
  } else if (answers.options === "view all roles") {
    await role();
    init()
  } else if (answers.options === "view all employees") {
    await employee();
    init()
  } else if (answers.options === "add a department") {
    await addDepartment();
    await department()
    init()
  } else if (answers.options === "add a role") {
    await addRole();
    await role();
    init()
  } else if (answers.options === "add an employee") {
    await addEmployee();
    await employee();
    init
  } else if (answers.options === "update an employee role") {
  } else {
    conn.end();
    return;
  }
}

init();




