const router = require('express').Router();
const fs = require('fs');
const baseUrl = require('../middlewares/baseUrl');
const pathUrl = require('../middlewares/pathUrl');

router.get('/:path?', baseUrl, pathUrl, async (req, res, next) => {
  try {
    const { pathUrl: path } = req;
    const dir = await fs.promises.opendir(path);

    let content = { directories: [], files: [] };

    for await (const dirent of dir) {
      if (dirent.isDirectory()) {
        content.directories.push(dirent.name);
      } else {
        content.files.push(dirent.name);
      }
    }

    content.directories.sort();
    content.files.sort();

    res.status(200).json({ path, content });
  } catch (err) {
    next(err.message);
  }
})

module.exports = router;
