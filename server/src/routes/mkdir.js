const router = require('express').Router();
const fs = require('fs');
const baseUrl = require('../middlewares/baseUrl.js');
const pathUrl = require('../middlewares/pathUrl.js');

router.post('/:path?', baseUrl, pathUrl, async (req, res) => {
  const { pathUrl: path } = req;
  const { name } = req.body;
  await fs.promises.mkdir(`${path}/${name}`);
  res.status(200).json({ createdPath: `${path}/${name} `});
})

module.exports = router;
