const dotenv = require('dotenv');
const { error } = require("./cli");

dotenv.config({
  path: '.env',
});

module.exports = (key, defVal=undefined) => {
  if (defVal === undefined && !process.env[key]) {
    error(`Missing env var ${key}, setup it in the .env file`);
  }

  return process.env[key] || defVal;
}
