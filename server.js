const inquirer = require("inquirer");
const conn = require("./db/connection");
// const {role, addRole} = require('./lib/role')
// const {department, addDepartment} = require('./lib/department')
// const {employee, addEmployee} = require('./lib/employee')
const table = require("console.table");

// const mysql = require("mysql2/promise");
// const conn = mysql.createConnection({
//   host: "localhost",
//   // Your MySQL username,
//   user: "root",
//   // Your MySQL password
//   password: "",
//   database: "employees",
// });

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
    department();
    // console.table(viewAllDepartment)
    // init()
  } else if (answers.options === "view all roles") {
    role();
  } else if (answers.options === "view all employees") {
    employee();
  } else if (answers.options === "add a department") {
    addDepartment();
  } else if (answers.options === "add a role") {
    addRole();
  } else if (answers.options === "add an employee") {
    addEmployee();
  } else if (answers.options === "update an employee role") {
  } else {
    conn.end();
    // return;
  }
}

async function department() {
  const sql = `SELECT * FROM department`;

  const [rows, fields] = await (await conn).execute(sql);
  console.table(rows);
  init();
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
  conn.query(sql, departmentName, (err, data) => {
    if (err) throw err;
    console.log("dept added", data);
  });
  // conn.end
  department();
}

async function role() {
  const sql = `select * from role`;

  const [roles] = await (await conn).execute(sql);
  console.table(roles);

  // conn.query(sql, (err, data) => {
  //   if (err) throw err;
  //   console.table(data);
  // });
  init();
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

  // conn.query(sql, [roleName, salary, dept.id], (err, data) => {
  //   if (err) throw err;
  //   console.log("role add", data);
  // })edR
  role();
  // init();
}

// async function listAllDepartments() {
//   const [rows, fields] = await (await conn).execute(`SELECT * FROM department`);
//   return rows;
// }

// async function addRole() {
//   const newRole = await inquirer.prompt([
//     {
//       type: "input",
//       name: "roleName",
//       message: "what is the name of the role",
//     },
//     {
//       type: "input",
//       name: "salary",
//       message: "what is the salary for the role",
//     },
//   ]);

//   const { roleName, salary, deptName } = newRole;

//   const roleSql = `select name, id from department`;
// conn.query(roleSql, (err, data) => {
//     if (err) throw err;

//     const department = data.map(({ name, id }) => ({ name: name, value: id }));
//   inquirer.prompt([
//       {
//         type: "list",
//         name: "deptName",
//         message: "which department does this role belong to?",
//         choices: department,
//       },
//     ]).then((deptName)=>{

//       newRole.push(deptName);

//       const sql = `INSERT INTO role (title, salary, department_id)
//         VALUES (?,?,?)`;
//       // for dept name, gotta connect dept id to name
//       conn.query(sql, [roleName, salary, deptName], (err, data) => {
//         if (err) throw err;
//         console.log("role add", data);
//         role();
//       });
//     })

//   });
// }

init();

// module.exports= init;
// function employee() {
//   const sql = `SELECT * FROM employee`;
//   conn.query(sql, (err, data) => {
//     if (err) throw err;
//     console.table(data);
//     init();
//   });
// }

// async function addEmployee() {
//   const addEmployeeAnswer = await inquirer.prompt([
//     {
//       type: "input",
//       name: "firstName",
//       message: "what is the employees first name",
//     },
//     {
//       type: "input",
//       name: "lastName",
//       message: "what is the employees last name",
//     },
//     {
//       type: "list",
//       name: "role",
//       message: "what is the employees role",
//       choices: role,
//     },
//     {
//       type: "input",
//       name: "managerName",
//       message: "what is the employees manager name",
//     },
//   ]);
//   const { firstName, lastName, role, managerName } = addEmployeeAnswer;
//   const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
// VALUES (?, ?, ?, ?) `;

//   // this is workinmg with numbers for role and manager name
//   conn.query(sql, [firstName, lastName, role, managerName], (error, data) => {
//     if (error) throw error;
//     console.table(data);
//   });
//   employee();
// }
