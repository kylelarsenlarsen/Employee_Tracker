USE employee_db;

INSERT INTO department (name)
VALUES 
('Engineering'), 
('Legal'),
('Custodial'),
('Customer Service');

INSERT INTO role (title, salary, department_id)
VALUES
('Engineer', 100000.00, 1),
('Lawyer', 20000.00, 2),
('Custodian', 1000000.00, 3),
('CSR', 45000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Mike', 'Truk', 1, null),
('Willie', 'Dustice', 2, null),
('Shown', 'Furcotte', 3, null),
('Anatoli', 'Smorin', 4, null);