// load in ENV variables
const { getConnection } = require('./db/client');

const selectEmployees = async () => {
  try {
    const connection = await getConnection();

    const [results, fields] = await connection.execute('SELECT * FROM employee');
    // Do something with results
    console.log(results, fields);
  } catch (error) {
    console.error('Error executing SQL query:', error);
  }
};

selectEmployees();
