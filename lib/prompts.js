const { titleCase } = require('./util/helpers.js');

const prompts = [
  {
    name: 'task',
    type: 'list',
    message: 'Select a Task:',
    choices: [
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add an employee',
      'Update an employee role',
    ],
  },
  {
    name: 'department',
    type: 'input',
    message: 'Enter department name:',
    filter: titleCase,
    when: (answer) => {
      if (answer.task === 'Add a department') {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      if (answer.trim().length === 0) {
        return 'Please enter a department name';
      }
      return true;
    },
  },
];

module.exports = prompts;
