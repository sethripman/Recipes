const express = require('express');
const app = express();
const recipies = require('./routes/recipies-routes');

app.use('/api/v1/recipes', recipies);

module.exports = app;
