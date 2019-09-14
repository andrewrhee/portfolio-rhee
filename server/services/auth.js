const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');



// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    jwksUri: 'https://dev-4bpat5rc.auth0.com/.well-known/jwks.json'
  }),
  audience: 'WrH4Ekk63hsiOGvc7hruEuH6p8RgLaxX',
  issuer: 'https://dev-4bpat5rc.auth0.com/',
  algorithms: ['RS256']
})

exports.checkRole = role => (req, res, next) => {
  const user = req.user;

  if (user && (user[process.env.NAMESPACE + '/role'] === role)) {
    next();
  } else {
    return res.status(401).send({title: 'Not Authorized', detail: 'You are not authorized to access this data'});
  }
}