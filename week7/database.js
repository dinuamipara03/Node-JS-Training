// MySQL

// npm install mysql

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'week6_5'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()


// PostgreSQL

//  npm install pg-promise


const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:1234@127.0.0.1:5432/postgres')

db.one('SELECT 1 + 1 AS value', 12341234)
  .then((data) => {
    console.log('DATA:', data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })