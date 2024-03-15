class Role {
  constructor(db) {
    this.db = db;
  }
  // add a new role to the role table
  async add({ roleTitle, roleSalary, roleDepartment }) {
    try {
      const connection = await this.db();

      const sql = 'INSERT INTO `role`(`title`, `salary`, `department_id`) VALUES(? , ? ,?)';
      const values = [roleTitle, roleSalary, roleDepartment];

      await connection.execute(sql, values);
      console.log(`${roleTitle} role added!`);
    } catch (error) {
      console.log('Error executing SQL query:', error);
    }
  }

  // retrieve necessary fields from role and join the role and department together
  async retrieve() {
    try {
      const connection = await this.db();

      const [results] = await connection.execute(`
        SELECT r.title AS title, r.id AS role_id,
        d.name AS department_name, r.salary AS role_salary
        FROM role r
        INNER JOIN department d ON r.department_id = d.id
      `);
      console.table(results);
    } catch (error) {
      console.log('Error executing SQL query:', error);
    }
  }

  // populate choices used in prompt.js for employee role and update employee role
  async populate() {
    try {
      const connection = await this.db();

      const [results] = await connection.execute(`
       SELECT * FROM role
      `);

      return results.map(({ title, id }) => {
        return { name: title, value: id };
      });
    } catch (error) {
      console.log('Error executing SQL query:', error);
    }
  }
}

module.exports = Role;
