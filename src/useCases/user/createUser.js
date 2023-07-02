const makeUser = require('../../entitie/user')
const DatabaseError = require('../../utils/databaseError')

const createUser = ({ userDb }) => async (userInfo) => {
  const userOrError = makeUser(userInfo)

  if (userOrError.error) {
    return {
      message: userOrError.error.message,
      statusCode: userOrError.error.statusCode
    }
  }

  const user = userOrError
  const result = await userDb.findOne({ email: user.getUserEmail() })

  if (!(result)) {
    const userCreated = await userDb.insert({
      userName: user.getUserName(),
      userSurName: user.getUserSurname(),
      userEmail: user.getUserEmail(),
      userDocument: user.getUserDocumentNumber()
    })
    return {
      userCreated,
      statusCode: 201
    }
  }

  if (result instanceof DatabaseError) {
    return {
      result,
      statusCode: 500,
    }
  } else {
    return {
      error: {
        message: 'User already exists',
        statusCode: 409
      }
    }
  }
}

module.exports = createUser
