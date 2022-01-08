import {conn} from "../db/connection.js"
import inquirer from "inquirer";

async function employee() {
  const sql = `SELECT * FROM employee`;
  
  const [viewDept] = await (await conn).execute(sql);
  console.table(viewDept)
}

async function addEmployee() {
    const [listRoles] = await (await conn).execute(`select * from role`);
    const [manager] = await (await conn).execute(`select * from employee where manager_id=1`)
    // console.log(manager)
// console.log({listRoles})
  const addEmployeeAnswer = await inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "what is the employees first name",
    },
    {
      type: "input",
      name: "lastName",
      message: "what is the employees last name",
    },
    {
      type: "list",
      name: "role",
      message: "what is the employees role",
      choices: listRoles.map((role, id) => {
        //   console.log(role.title)
        return role.title;
      })
    },
    {
      type: "list",
      name: "managerName",
      message: "what is the employees manager name",
      choices: manager.map((mgr) =>{
        console.log('first name', mgr.first_name)
        console.log('last name', mgr.last_name)
        const mgrName = [mgr.first_name, mgr.last_name]
        console.log('~~~~~~~',mgrName)
        // how can i return first and last name



      })
    },
  ]);
  const { firstName, lastName, role, managerName } = addEmployeeAnswer;
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (?, ?, ?, ?) `;

  // this is workinmg with numbers for role and manager name
  conn.query(sql, [firstName, lastName, role, managerName], (error, data) => {
    if (error) throw error;
    console.table(data);
  });
  employee();
}

export {employee, addEmployee}