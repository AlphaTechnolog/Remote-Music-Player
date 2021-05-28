const env = require('./env');

module.exports = () => {
  const baseUrl = env('BASE_URL');
  return baseUrl.replace('$HOME', process.env.HOME);
}
