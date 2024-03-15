const Department = require('./classes/Department');
const Employee = require('./classes/Employee');
const Role = require('./classes/Role');
const { getConnection } = require('../db/client.js');

const role = new Role(getConnection);
const employee = new Employee(getConnection);
const department = new Department(getConnection);

module.exports = {
  role,
  employee,
  department,
};
