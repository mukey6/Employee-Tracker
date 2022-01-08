import {conn} from "../db/connection.js"
import inquirer from "inquirer";

async function role() {
    const sql = `select * from role`;
  
    const [roles] = await (await conn).execute(sql);
    console.table(roles);
  
 
  }
  
  async function addRole() {
    const [departments] = await (await conn).execute(`select * from department`);
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
        type: "list",
        name: "deptName",
        message: "which department does this role belong to?",
        choices: departments.map((dept, id) => {
          return dept.name;
        }),
      },
    ]);
    const { roleName, salary, deptName } = newRole;
    const [dept] = departments.filter((dept) => {
      return dept.name === deptName;
    });
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
    // for dept name, gotta connect dept id to name
    const [addedRole] = await (await conn).execute(sql, [roleName, salary, dept.id]);
    console.log(addedRole);
  
 
  }
  
  export {role, addRole}