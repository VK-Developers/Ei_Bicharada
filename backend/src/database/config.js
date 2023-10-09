require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER_STG,
    password: process.env.MYSQL_PASSWORD_STG,
    database: process.env.MYSQL_DATABASE_STG,
    host: process.env.MYSQL_HOST_STG,
    port: process.env.MYSQL_PORT_STG,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER_STG,
    password: process.env.MYSQL_PASSWORD_STG,
    database: process.env.MYSQL_DATABASE_STG,
    host: process.env.MYSQL_HOST_STG,
    port: process.env.MYSQL_PORT_STG,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER_PROD,
    password: process.env.MYSQL_PASSWORD_PROD,
    database: process.env.MYSQL_DATABASE_PROD,
    host: process.env.MYSQL_HOST_PROD,
    port: process.env.MYSQL_PORT_PROD,
    dialect: 'mysql',
  },
};
