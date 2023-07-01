const makeUserPost = ({ createUser }) => async (httpRequest) => {
  try {
    const { source = {}, ...userInfo } = httpRequest.body
    source.ip = httpRequest.ip
    source.browser = httpRequest.headers['User-Agent']
    if (httpRequest.headers.Referer) {
      source.referrer = httpRequest.headers.Referer
    }
    const userCreatedOrError = await createUser({
      ...userInfo
    })

    if (userCreatedOrError.result instanceof Error) {
      return userCreatedOrError
    }

    if (userCreatedOrError.error) {
      return userCreatedOrError.error
    }

    return {
      headers: {
        'Content-Type': 'application/json',
        'Last-Modified': new Date(userCreatedOrError.modifieOn).toUTCString()
      },
      body: userCreatedOrError
    }
  } catch (error) {
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      stausCode: 400,
      body: {
        error: error.message,
      }
    }
  }
}

module.exports = makeUserPost
