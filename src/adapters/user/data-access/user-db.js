const DatabaseError = require('../../../utils/databaseError')

const makeUserDb = ({ makeDb }) => {
  async function insert ({ ...userInfo }) {
    try {
      const db = await makeDb()

      const result = await db
        .collection('users')
        .insertOne(userInfo)

      const { ...insertedInfo } = result
      return { insertedInfo }
    } catch (error) {
      return new DatabaseError('Error in Adapter layer: Database Error', 'DB_ERROR', error)
    }
  }

  async function findOne({ email }) {
    try {
      const db = await makeDb()

      const result = await db
        .collection('users')
        .findOne({ userEmail: email })

      return result
    } catch (error) {
      return new DatabaseError('Error in Adapter layer: Database Error', 'DB_ERROR', error)
    }
  }

  async function find () {
    try {
      const db = await makeDb()
      
      const results = await db
        .collection('users')
        .find().toArray()
     
      return results
    } catch (error) {
      return new DatabaseError('Error in Adapter layer: DataBaseError', 'DB_ERROR', error)
    }
  }

  return Object.freeze({
    insert,
    findOne,
    find
  })
}

module.exports = makeUserDb
