const DatabaseError = require('../../utils/databaseError')

const listUsers = ({ userDb }) => async () => {
  const results = await userDb.find()
  
  if (results instanceof DatabaseError) {
    return {
      results,
      statusCode: 500,
    }
  }

  const users = results.map(result => result)

  return {
    users,
    statusCode: 200
  }
}

module.exports = listUsers
