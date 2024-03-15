const Task = require('./lib/classes/Task.js');
const Department = require('./lib/classes/Department.js');
const { getConnection } = require('./db/client.js');
const Employee = require('./lib/classes/Employee.js');
const Role = require('./lib/classes/Role.js');

// initialize the application and show prompts
const init = () => {
  const role = new Role(getConnection);
  const employee = new Employee(getConnection);
  const department = new Department(getConnection);
  const task = new Task(department, role, employee);
  task.select();
};

init();
