const mongoose = require('mongoose');
const Recipe = require('./Recipe');
 

const schema = new mongoose.Schema({
  recipeId:[Recipe._id],
  dateOfEvent: {
    type: Date,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Recipe', schema);
