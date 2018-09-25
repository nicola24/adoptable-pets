const express = require('express');

const router = require('./middlewares/router');
const logger = require('./logger');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('dist'));

app.use('/', router);

app.listen(port, () => logger.appStarted(port));
