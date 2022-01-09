# Employee-Tracker

DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
    );

-- department ID constraint to id from dept table?
  CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INTEGER,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
    );

 CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL
    );

    
INSERT INTO role (id, title, salary, department_id)
    VALUES (1, "manager", 30000, 1);

    SELECT candidates.*, parties.name AS party_name, COUNT(candidate_id)
FROM votes
LEFT JOIN candidates ON votes.candidate_id = candidates.id
LEFT JOIN parties ON candidates.party_id = parties.id
GROUP BY candidate_id

select employee.*, salary as employee_salary from role
left join employee on employee.role_id = role.id;

select role.*, name from department
left join role on department.id=role.department_id;

UPDATE users
SET username = "Lernantino", email = "lernantino@gmail.com", password = "newPassword1234"
WHERE id = 1;

delete from role where id=8;

update role 
    -> set title = "trainer", salary = 55000, department_id=3
    -> where id=1;

    delete from role where id=?

    select from employee 

    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) 