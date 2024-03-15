class Role {
  constructor(db) {
    this.db = db;
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
      console.error('Error executing SQL query:', error);
    }
  }
}

module.exports = Role;
