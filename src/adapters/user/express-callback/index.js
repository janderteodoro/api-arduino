const makeExpressCallback = (controller) => (req, res) => {
  const httpRequest = {
    body: req.body,
    query: req.query,
    params: req.params,
    ip: req.ip,
    method: req.method,
    path: req.path,
    headers: {
      'Content-Type': req.get('Content-Type'),
      Referer: req.get('referer'),
      'User-Agent': req.get('User-Agent'),
    },
  };
  controller(httpRequest)
    .then((httpResponse) => {
      if (httpResponse.headers) {
        res.set(httpResponse.headers);
      }
      res.type('json');
      res
        .status(httpResponse.statusCode || httpResponse.body.statusCode)
        .send(httpResponse.body || httpResponse);
    })
    .catch(() => res.status(500).send({ error: 'An unkown error occurred.' }));
};

module.exports = makeExpressCallback;
