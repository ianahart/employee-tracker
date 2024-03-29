const Department = require('./classes/Department');
const Employee = require('./classes/Employee');
const Role = require('./classes/Role');
const { getConnection } = require('../db/client.js');

// initialize the classes and have them ready for user by exporting them

const role = new Role(getConnection);
const employee = new Employee(getConnection);
const department = new Department(getConnection);

module.exports = {
  role,
  employee,
  department,
};
