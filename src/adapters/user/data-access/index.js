const makeUserDb = require('./user-db')
const makeDb = require('../../../infrastructure/user/db')

const userDb = makeUserDb({ makeDb })

module.exports = userDb
