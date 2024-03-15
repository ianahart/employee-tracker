class Role {
  constructor(db) {
    this.db = db;
  }

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

  async retrieve() {
    try {
      const connection = await this.db();

      const [results] = await connection.execute(`
        SELECT role.title AS title, role.id AS role_id,
        department.name AS department_name, role.salary AS role_salary
        FROM role
        INNER JOIN department ON role.department_id = department.id
      `);
      console.table(results);
    } catch (error) {
      console.log('Error executing SQL query:', error);
    }
  }

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
      console.error('Error executing SQL query:', error);
    }
  }
}

module.exports = Role;
