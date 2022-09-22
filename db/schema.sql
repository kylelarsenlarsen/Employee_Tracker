-- this line of code specifically removes 'emplyee_db' if it had already been created to avoid problems.
DROP DATABASE IF EXISTS employee_db; 
-- this line initializes the database. pretty straightforward...
CREATE DATABASE employee_db;
-- initializing the database
USE employee_db;
-- creating the department table
CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- we're declaring the variable 'id', it must be an integer, the NOT NULL statement dictates it cannot be null, PRIMARY KEY identifies each record in a table. AUTO_INCREMENT assigns a unique primary key to every inserted record.
    name VARCHAR(30) NOT NULL -- declaring the variable 'name', we're giving it a max of 30 varying characters and telling it that it can't be a null value.
);
-- creating a sub-category role table within our database.
CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- we're declaring the variable 'id', it must be an integer, the NOT NULL statement dictates it cannot be null, PRIMARY KEY identifies each record in a table. AUTO_INCREMENT assigns a unique primary key to every inserted record.
    title VARCHAR(30) NOT NULL, -- declaring the variable title, setting a max of 30 varying characters and telling SQL to only allow object values. if not it won't function.
    salary DECIMAL(10, 2) NOT NULL, -- we're declare a salary variable, allowing a decimal number to pass to the table with a whole number value of 10 figures and a decimal place of 2.
    
)