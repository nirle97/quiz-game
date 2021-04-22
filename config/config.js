require("dotenv").config();
module.exports = {
  development: {
    username: "root",
    password: "nirfullstack",
    database: "orm",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      underscore: true,
    },
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
