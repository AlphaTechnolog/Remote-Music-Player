const express = require('express');
const fileUpload = require('express-fileupload');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const env = require('./helpers/env');
const getBaseUrl = require('./helpers/getBaseUrl');

const contentRouter = require('./routes/content');
const uploadRouter = require('./routes/upload');
const mkdirRouter = require('./routes/mkdir');

const errorsMiddleware = require('./middlewares/errors');

const app = express();

app.set('port', env("APP_PORT", 8080));

app.use(cors());
app.use(fileUpload());
app.use(morgan('dev'));
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Remote Music Player API"));

app.use('/content', contentRouter);
app.use('/upload', uploadRouter);
app.use('/mkdir', mkdirRouter);
app.use('/get', express.static(getBaseUrl()));

app.use(errorsMiddleware);

app.listen(app.get('port'), () => {
  console.log("Listening on port", app.get("port"));
});
