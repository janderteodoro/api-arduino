const express = require('express')
const { userPost, userGet } = require('../../../adapters/user/controllers')
const makeCallback = require('../../../adapters/user/express-callback')

const router = express.Router()

router
  .post('/user', makeCallback(userPost))
  .get('/user', makeCallback(userGet))

module.exports = router
