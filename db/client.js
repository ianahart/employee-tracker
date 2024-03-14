const mysql = require('mysql2/promise');
require('dotenv').config();

let connection; // module-level variable to store the connection

const createMySQLConnection = async () => {
  try {
    if (!connection) {
      connection = await mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'employee_db',
      });
    }
    return connection;
  } catch (error) {
    console.error('Error establishing database connection:', error);
    throw error;
  }
};

// export a function to get the database connection
module.exports = {
  getConnection: async () => {
    return await createMySQLConnection();
  },
};
