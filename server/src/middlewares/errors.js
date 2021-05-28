module.exports = (errMessage, req, res, next) => {
  return res.status(200).json({ err: errMessage });
}
