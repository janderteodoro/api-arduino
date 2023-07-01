const { createUser } = require('../../../useCases/user')
const makeUserPost = require('./user-post')

const userPost = makeUserPost({ createUser })

const userController = Object.freeze({
  userPost
})

module.exports = userController
