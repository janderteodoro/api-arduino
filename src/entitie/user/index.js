const buildMakeUser = require('./userEntitie')
const userValidate = require('./userValidate')

const makeUser = buildMakeUser(userValidate)

module.exports = makeUser
