-- this line of code specifically removes 'emplyee_db' if it had already been created to avoid problems.
DROP DATABASE IF EXISTS employee_db; 
-- this line initializes the database. pretty straightforward...
CREATE DATABASE employee_db;
-- initializing the database
USE employee_db;