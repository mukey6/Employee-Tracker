INSERT INTO department (name)
VALUES ('finance'),
('sales'),
('human resources');

INSERT INTO role (title, salary, department_id)
VALUES ('lead', 30000, 1),
('manager', 40000, 1),
('loan officer', 50000, 2),
('customer service', 60000, 2),
('teller', 70000, 1),
('recruiter', 80000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 1),
  ('Virginia', 'Woolf', 1, 1),
  ('Piers', 'Gaveston', 2,null),
  ('Charles', 'LeRoi', 2, 1),
  ('Katherine', 'Mansfield', 3, 1),
  ('Dora', 'Carrington', 4,null),
  ('Edward', 'Bellamy', 5,null),
  ('Montague', 'Summers', 6, 1),
  ('Octavia', 'Butler', 6, 1);