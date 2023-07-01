const buildMakeUser = (userValidate) => ({
  userName,
  userSurname,
  userEmail,
  userDocumentNumber
} = {}) => {
  if (!userName || !userSurname || !userEmail || !userDocumentNumber) {
    return {
      error: {
        message: 'all properties are mandatory',
        statusCode: 400
      }
    }
  }

  if (!userValidate({ cpf: userDocumentNumber, email: userEmail })) {
    return {
      error: {
        message: 'invalid Data',
        statusCode: 400
      }
    }
  }

  return Object.freeze({
    getUserName: () => userName,
    getUserSurname: () => userSurname,
    getUserEmail: () => userEmail,
    getUserDocumentNumber: () => userDocumentNumber
  })
}

module.exports = buildMakeUser
