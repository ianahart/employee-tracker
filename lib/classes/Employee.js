class Employee {
  constructor(db) {
    this.db = db;
  }
  // add a new employee
  async add({ employeeFirstName, employeeLastName, employeeRole, employeeManager }) {
    try {
      const connection = await this.db();

      const sql = 'INSERT INTO `employee`(`first_name`, `last_name`, `role_id`, `manager_id`) VALUES (?, ?, ?, ?)';
      const values = [employeeFirstName, employeeLastName, employeeRole, employeeManager];

      await connection.execute(sql, values);
    } catch (error) {
      console.log('Error executing SQL query: ', error);
    }
  }

  // retrieve information about employees, their roles, departments
  // salaries, and names of managers. Doing so by joining role, department,
  // and employee. the employee left join is finding the manager for each employee
  // by matching the manager_id with the employee id
  async retrieve() {
    try {
      const connection = await this.db();

      const [results] = await connection.execute(
        `SELECT employee.id AS employee_id, employee.first_name AS first_name,
        employee.last_name AS last_name, role.title AS title, department.name AS department,
        role.salary AS salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee manager ON employee.manager_id = manager.id;
        `
      );
      console.table(results);
    } catch (error) {
      console.log('Error executing SQL query:', error);
    }
  }

  // populate choices in prompt js for employeeManager and updateEmployee prompts
  async populate() {
    try {
      const connection = await this.db();

      const [results] = await connection.execute(`SELECT * FROM Employee`);

      return results.map(({ first_name, last_name, id }) => {
        return { name: `${first_name} ${last_name}`, value: id };
      });
    } catch (error) {
      console.log('Error  executing SQL query: ', error);
    }
  }

  // update the specified employee's role and set it to updateRole by updateEmployee id
  async update({ updateEmployee, updateRole }) {
    try {
      const connection = await this.db();
      const sql = 'UPDATE `employee` SET `role_id` = ? WHERE `id` = ? LIMIT 1';
      const values = [updateRole, updateEmployee];

      await connection.execute(sql, values);
      console.log('Employee role updated!');
    } catch (error) {
      console.log('Error executing SQL query: ', error);
    }
  }
}

module.exports = Employee;
