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
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  }
}));

Event.virtual('day')
  .get(function() {
    return this.dateOfEvent.getDay();
  })
  .set(function(day) {
    this.dateOfEvent.setDate(day);
  });

Event.virtual('month')
  .get(function() {
    return this.dateOfEvent.getMonth();
  })
  .set(function(month) {
    this.dateOfEvent.setMonth(month);
  });

Event.virtual('year')
  .get(function() {
    return this.dateOfEvent.getFullYear();
  })
  .set(function(year) {
    this.dateOfEvent.setYear(year);
  });


module.exports = Event;
