class Department {
  constructor(db) {
    this.db = db;
  }

  async retrieve() {
    try {
      const connection = await this.db();

      const [results, fields] = await connection.execute('SELECT * FROM `department`');
      console.log(results, fields);
      console.table(results);
    } catch (error) {
      console.error('Error executing SQL query:', error);
    }
  }
}

module.exports = Department;
