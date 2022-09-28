const mysql = require('mysql2');
const inquirer = require('inquirer');

// connection credentials.
let connection = mysql.createConnection({
    port:3306,
    user:'root',
    password:'password',
    database:'employee_db'
});
// this statement executes two way communications with our employee database.
connection.connect(() => {
    console.log('Connected.');
    prompt();
});
// the following section of code prompts the user with a list of options to view, add, or update employees within the tracker.
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
          case "Update employee roles":
            updateRole();
            break;
          case "exit":
            connection.end();
            break;
        }
      });
  };

// the following are functions to view each table.
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

  function viewEmployees() {
    connection.query('SELECT * FROM employee', (err, res) => {
      if (err) throw err // 
      console.table(res)
      prompt();
    });
  };
  
// in the following code i need an inquirer prompts to add roles, employees, and departments.
let addDepartment = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Enter the name of the department you want to add:',
        name: 'departmentName',
        default: () => {},
        validate: function (name) {
          valid = /^[a-zA-Z\s]*$/.test(name);

          if (valid) {
            return true;
          } else {
            console.log('\nEnter only letters, and spaces');
            return false;
          }
        },
      },
    ])
    .then((departmentAnswer) => {
      connection.promise()
        .query(
          `INSERT INTO department (name) VALUES ("${departmentAnswer.departmentName}")`
        )
        .then(([rows, fields]) => {
          console.log('\n');
          viewDepartments();
        })
        .catch(console.log);
    });
};

let addRole = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Enter the title of the role you want to add:',
        name: 'roleName',
        default: () => {},
        validate: function (name) {
          valid = /^[a-zA-Z\s]*$/.test(name);

          if (valid) {
            return true;
          } else {
            console.log('\nEnter only letters, and spaces');
            return false;
          }
        },
      },
      {
        type: 'input',
        message: 'Enter salary of the role you want to add:',
        name: 'salaryAmt',
        default: () => {},
        validate: function (salary) {
          valid = /^[1-9]+[0-9]*$/.test(salary);

          if (valid) {
            return true;
          } else {
            console.log('\nEnter only numbers, no commas or spaces');
            return false;
          }
        },
      },
      {
        type: 'input',
        message: 'Enter a department id (number):',
        name: 'departmentId',
        default: () => {},
        validate: function (salary) {
          valid = /^[1-9]+[0-9]*$/.test(salary);

          if (valid) {
            return true;
          } else {
            console.log('\nEnter only numbers, no commas or spaces');
            return false;
          }
        },
      },
    ])
    .then((roleAnswer) => {
      connection.promise() // our producing code, the generating portion of our promise object.
        .query(
          `INSERT INTO role (title, salary, department_id) VALUES ("${roleAnswer.roleName}", "${roleAnswer.salaryAmt}", "${roleAnswer.departmentId}")`
        )
        .then(([rows, fields]) => {
          console.log('\n');
          viewRoles();
        })
        .catch(console.log);
    });
};

let addEmployee = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'Enter the first name of the employee you want to add:',
        name: 'employeeFirstName',
        default: () => {},
        validate: function (name) {
          valid = /^[a-zA-Z\s]*$/.test(name);

          if (valid) {
            return true;
          } else {
            console.log('\nEnter only letters, and spaces');
            return false;
          }
        },
      },
      {
        type: 'input',
        message: 'Enter the last name of the employee you want to add:',
        name: 'employeeLastName',
        default: () => {},
        validate: function (name) {
          valid = /^[a-zA-Z\s]*$/.test(name);

          if (valid) {
            return true;
          } else {
            console.log('\nEnter only letters, and spaces');
            return false;
          }
        },
      },
      {
        type: 'input',
        message:
          'Enter the role ID of the employee you want to add (number):',
        name: 'employeeRoleId',
        default: () => {},
        validate: function (salary) {
          valid = /^[1-9]+[0-9]*$/.test(salary);

          if (valid) {
            return true;
          } else {
            console.log('\nEnter only numbers, no commas or spaces');
            return false;
          }
        },
      },
      {
        type: 'input',
        message: 'Enter the ID of the employees manager (number):',
        name: 'employeeManagerId',
        default: () => {},
        validate: function (salary) {
          valid = /^[1-9]+[0-9]*$/.test(salary);

          if (valid) {
            return true;
          } else {
            console.log('\nEnter only numbers, no commas or spaces');
            return false;
          }
        },
      },
    ])
    .then((employeeAnswer) => {
      connection.promise()
        .query(
          `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${employeeAnswer.employeeFirstName}", "${employeeAnswer.employeeLastName}", "${employeeAnswer.employeeRoleId}", "${employeeAnswer.employeeManagerId}")`
        )
        .then(([rows, fields]) => {
          console.log('\n');
          viewEmployees();
        })
        .catch(console.log);
    });
};

let updateRole = () => {
  console.log(updateRole);
  inquirer
    .prompt([
      {
        type: 'input',
        message:
          'Employee ID you would like to update (number):',
        name: 'employeeIdSelection',
        default: () => {},
        validate: function (salary) {
          valid = /^[1-9]+[0-9]*$/.test(salary);

          if (valid) {
            return true;
          } else {
            console.log('\nEnter only numbers, no commas or spaces');
            return false;
          }
        },
      },
      {
        type: 'input',
        message:
          'Enter the ID of the role you would like to give this employee (number):',
        name: 'employeeNewRoleId',
        default: () => {},
        validate: function (salary) {
          valid = /^[1-9]+[0-9]*$/.test(salary);

          if (valid) {
            return true;
          } else {
            console.log('\nEnter only numbers, no commas or spaces');
            return false;
          }
        },
      },
    ])
    .then((employeeSelection) => {
      connection.promise()
        .query(
          `UPDATE employee SET role_id = ${employeeSelection.employeeNewRoleId} WHERE id = ${employeeSelection.employeeIdSelection}`
        )
        .then(([rows, fields]) => {
          console.log('\n');
          viewEmployees();
        })
        .catch(console.log);
    });
};
