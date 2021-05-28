const env = require('../helpers/env');

module.exports = (req, res, next) => {
  const baseUrl = env('BASE_URL');
  req.baseUrl = baseUrl.replace('$HOME', env('HOME'));
  next();
}
