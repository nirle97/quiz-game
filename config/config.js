require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    logging: false,
    define: {
      underscore: true,
    },
    dialectOptions: {
      decimalNumbers: true,
      socketPath: process.env.INSTANCE,
    },
  },
  test: {
    username: "root",
    password: process.env.PASSWORD,
    database: "ormtest",
    host: process.env.HOST,
    port: 3306,
    dialect: "mysql",
    define: {
      underscore: true,
    },
    dialectOptions: {
      decimalNumbers: true,
      socketPath: process.env.INSTANCE,
    },
  },
  production: {
    username: "root",
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: 3306,
    dialect: "mysql",
    define: {
      underscore: true,
    },
    dialectOptions: {
      decimalNumbers: true,
      socketPath: process.env.INSTANCE,
    },
  },
};
