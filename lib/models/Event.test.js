// const mongoose = require('mongoose');
// const Recipe = require('./Recipe');
const Event = require('./Event');

describe('Event model', () => {
  it('has a required recipeId', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.recipe.message).toEqual('Path `recipe` is required.');
  });

  it('has a required dateOfEvent', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.dateOfEvent.message).toEqual('Path `dateOfEvent` is required.');
  });
  it('has a required rating', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` is required.');
  });
  it('has a required a rating of 0 or above', () => {
    const event = new Event({ rating: -1 });
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` (-1) is less than minimum allowed value (0).');
  });
  it('has a required rating a rating of 5 or lower', () => {
    const event = new Event({ rating: 6 });
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` (6) is more than maximum allowed value (5).');
  });
});
