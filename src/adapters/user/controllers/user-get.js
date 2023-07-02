const makeUserGet = ({ listUsers }) => async (httpRequest) => {
  try {
    const { source = {} } = httpRequest.body
    source.ip = httpRequest.ip
    source.browser = httpRequest.headers['User-Agent']
    
    if (httpRequest.headers.Referer) {
      source.referrer = httpRequest.headers.Referer
    }

    const listUsersOrError = await listUsers()

    if (listUsersOrError instanceof Error) {
      return listUsersOrError
    }
    
    return {
      headers: {
        'Content-Type': 'application/json',
      },
      body: listUsersOrError
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

module.exports = makeUserGet
