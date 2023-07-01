const express = require('express')
const { userPost } = require('../../../adapters/user/controllers')
const makeCallback = require('../../../adapters/user/express-callback')

const router = express.Router()

router
  .post('/user', makeCallback(userPost))

module.exports = router
