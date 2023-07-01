const mongodb = require('mongodb')
require('dotenv').config()

const { MongoClient, ServerApiVersion } = mongodb
const url = process.env.USER_DB_URL
const dbName = process.env.USER_DB_NAME

const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

const makeDb = async () => {
  await client.connect()
  console.log('Connected to database')
  return client.db(dbName)
}
module.exports = makeDb
