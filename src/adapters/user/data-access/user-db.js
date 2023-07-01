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
      return new DatabaseError('Error in Adapter layer: Database Error', 'DB_ERROR')
    }
  }

  async function find ({ email }) {
    try {
      const db = await makeDb()

      const result = await db
        .collection('users')
        .findOne({ userEmail: email })

      return result
    } catch (error) {
      return new DatabaseError('Error in Adapter layer: Database Error', 'DB_ERROR')
    }
  }

  return Object.freeze({
    insert,
    find
  })
}

module.exports = makeUserDb
