module.exports = (req, res, next) => {
  let { path } = req.params;

  if (path) {
    path = path.split('!').join('/');
  } else {
    path = '';
  }

  req.pathUrl = `${req.baseUrl}/${path}`

  next();
}
