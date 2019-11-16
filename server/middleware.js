const jwt = require('jsonwebtoken');
const config = require('./config');

let checkToken = (req, res, next) => {
  let token = req.headers['token'] || req.headers['authorization'];
  if (token && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.send(401).json({
      success: false,
      message: 'Auth token is not provided'
    });
  }
};
module.exports = {
  checkToken
};