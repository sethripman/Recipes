const express = require('express');
const app = express();
// const router = require('./routes/recipes');

app.use(require('./routes/recipes'));

module.exports = app;
