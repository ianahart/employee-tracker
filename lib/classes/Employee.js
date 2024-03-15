class Employee {
  constructor(db) {
    this.db = db;
  }

  async retrieve() {
    try {
      const connection = await this.db();

      const [results, fields] = await connection.execute(
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
      console.error('Error executing SQL query:', error);
    }
  }

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
}

module.exports = Employee;
