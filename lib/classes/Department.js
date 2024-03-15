class Department {
  constructor(db) {
    this.db = db;
  }

  async add({ department }) {
    try {
      const connection = await this.db();

      const sql = 'INSERT INTO `department` (`name`) VALUES (?)';
      const values = [department];

      await connection.execute(sql, values);
      console.log(`${department} department added!`);
    } catch (err) {
      throw new Error(err);
    }
  }

  async retrieve() {
    try {
      const connection = await this.db();

      const [results] = await connection.execute(
        'SELECT department.id AS department_id, department.name AS department_name FROM department'
      );

      console.table(results);
      console.log(await this.populate());
    } catch (error) {
      console.error('Error executing SQL query:', error);
    }
  }

  async populate() {
    try {
      const connection = await this.db();

      const [results] = await connection.execute('SELECT * FROM department');

      return results.map((data) => {
        return { name: data.name, value: data.id };
      });
    } catch (error) {
      console.error('Error executing SQL query:', error);
    }
  }
}

module.exports = Department;
