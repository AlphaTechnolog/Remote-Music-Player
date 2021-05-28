const router = require('express').Router();
const baseUrl = require('../middlewares/baseUrl');
const pathUrl = require('../middlewares/pathUrl');

router.post('/:path?', baseUrl, pathUrl, async (req, res) => {
  const { pathUrl: path } = req;
  let { musics } = req.files;

  if (!musics.length) {
    musics = [musics];
  }

  for await (const music of musics) {
    await music.mv(`${path}/${music.name}`);
  }

  res.status(200).json({ success: "Musics moved to " + path})
})

module.exports = router;
