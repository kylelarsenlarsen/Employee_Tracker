-- this line of code specifically removes 'emplyee_db' if it had already been created to avoid problems.
DROP DATABASE IF EXISTS employee_db; 
-- this line initializes the database. pretty straightforward...
CREATE DATABASE employee_db;
-- initializing the database
USE employee_db;
-- creating the department table
CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, -- we're declaring the variable 'id', it must be an integer, the NOT NULL statement dictates it cannot be null, PRIMARY KEY identifies each record in a table.
    name VARCHAR(30) NOT NULL -- declaring the variable 'name', we're giving it a max of 30 varying characters and telling it that it can't be a null value.
);
-- creating a sub-category role table within our database.
CREATE TABLE role (
    id
)