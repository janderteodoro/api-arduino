const makeCreateUser = require('./createUser')
const userDb = require('../../adapters/user/data-access')

const createUser = makeCreateUser({ userDb })

const userService = Object.freeze({
  createUser
})

module.exports = userService
