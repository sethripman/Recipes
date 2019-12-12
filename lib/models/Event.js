const mongoose = require('mongoose'); 

const Event = mongoose.model('Event', new mongoose.Schema({
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true
  },
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
}));

module.exports = Event;
