const express = require('express');
const app = express();

app.use(require('./routes/recipes'));

module.exports = app;
