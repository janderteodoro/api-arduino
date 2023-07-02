const makeCreateUser = require('./createUser')
const makeListUsers = require('./ listUsers')
const userDb = require('../../adapters/user/data-access')

const createUser = makeCreateUser({ userDb })
const listUsers = makeListUsers({ userDb })

const userService = Object.freeze({
  createUser,
  listUsers
})

module.exports = userService
