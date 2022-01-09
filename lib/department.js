import { conn } from "../db/connection.js";
import inquirer from "inquirer";
import table from 'console.table'


async function department() {
  const sql = `SELECT * FROM department`;

  const [rows, fields] = await conn.execute(sql);
  console.table(rows);
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

  const { departmentName } = newDept;
  const sql = `INSERT INTO department (name)
  VALUES (?)`;
  const [addedDept] = await conn.execute(sql, [departmentName]);
  console.log("department is added to the database");
}

export { department, addDepartment };
