const mysql = require('mysql2');
const inquirer = require('inquirer');

// connection credentials.
let connection = mysql.createConnection({
    port:3306,
    user:'root',
    password:'password',
    database:'employee_db'
});

connection.connect(() => {
    console.log('Connected.');
    prompt();
});

function prompt() {
    inquirer.prompt([
      {
        name: "prompt",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a new department",
          "Add a new role",
          "Add a new employee",
  
          "Update employee roles",
          
          "Exit"
        ]
      }])
      .then(function (response) {
        switch (response.prompt) {
          case "View all departments":
            viewDepartments();
            break;
          case "View all roles":
            viewRoles();
            break;
          case "View all employees":
            viewEmployees();
            break;
          case "Add a new department":
            addDepartment();
            break;
          case "Add a new role":
            addRole();
            break;
          case "Add a new employee":
            addEmployee();
            break;
          
  case "Update role":
            updateRole();
            break;
          case "exit":
            connection.end();
            break;
        }
      });
  };

  function viewDepartments() {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err
        console.table(res)
        prompt();
    });
  };

  function viewRoles() {
    connection.query('SELECT * FROM role', (err, res) => {
        if (err) throw err
        console.table(res)
        prompt();
    });
  };
  