const { createUser, listUsers } = require('../../../useCases/user')
const makeUserPost = require('./user-post')
const makeUserGet = require('./user-get')

const userPost = makeUserPost({ createUser })
const userGet = makeUserGet({ listUsers })

const userController = Object.freeze({
  userPost, 
  userGet
})

module.exports = userController
