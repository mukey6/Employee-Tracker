import { conn } from "../db/connection.js";
import inquirer from "inquirer";
import table from 'console.table'

async function employee() {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
  FROM employee
  LEFT JOIN employee manager on manager.id = employee.manager_id
  INNER JOIN role ON (role.id = employee.role_id)
  INNER JOIN department ON (department.id = role.department_id)
`;

  const [viewAllEmployee] = await conn.execute(sql);
  console.table(viewAllEmployee);
}

async function addEmployee() {
  const [listRoles] = await conn.execute(`select * from role`);
  const [manager] = await conn.execute(
    `select * from employee where manager_id=1`
  );
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
        return role.title;
      }),
    },
    {
      type: "list",
      name: "managerName",
      message: "what is the employees manager name",
      choices: manager.map((mgr) => {
        return `${mgr.first_name} ${mgr.last_name}`;
      }),
    },
  ]);
  const { firstName, lastName, role, managerName } = addEmployeeAnswer;
  const [roleTitle] = listRoles.filter((roleTitle) => {
    return roleTitle.title === role;
  });

  const [mgrName] = manager.filter((mgrName) => {
    return `${mgrName.first_name + mgrName.last_name === managerName}`;
  });
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (?, ?, ?, ?) `;

  const [addedManager] = await conn.execute(sql, [
    firstName,
    lastName,
    roleTitle.id,
    mgrName.id,
  ]);
  console.log("employee is added to the database");
}

export { employee, addEmployee };
