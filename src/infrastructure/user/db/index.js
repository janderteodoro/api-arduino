const mysql = require('mysql2')
require('dotenv').config()

const host = process.env.MY_SQL_HOST
const user = process.env.MY_SQL_USER
const password = process.env.MY_SQL_PASS
const database = process.env.MY_SQL_DATABASE

const connection = mysql.createConnection({
  host,
  user,
  password,
  database
})

module.exports = connection
