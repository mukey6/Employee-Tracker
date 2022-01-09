import { conn } from "../db/connection.js";
import inquirer from "inquirer";
import table from 'console.table'


async function role() {
  const sql = `SELECT role.id, role.title, role.salary, department.name as department
    FROM role
    INNER JOIN department ON role.department_id=department.id;`;

  const [roles] = await conn.execute(sql);
  console.table(roles);
}

async function addRole() {
  const [departments] = await conn.execute(`select * from department`);
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
  const [addedRole] = await conn.execute(sql, [roleName, salary, dept.id]);
  console.log('role is added to the database');
}

export { role, addRole };
