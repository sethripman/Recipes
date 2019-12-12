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
  it('has a required notes', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.notes.message).toEqual('Path `notes` is required.');
  });
  it('has a required rating', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` is required.');
  });
  //   it('has a recipeId, dateOfEvent, notes, and ratings field', () => {
  //     const event = new Event({
  //       name: 'Cookies',
  //       directions: [
  //         'preheat oven to 375',
  //         'mix ingredients',
  //         'put dough on cookie sheet',
  //         'bake for 10 minutes'
  //       ],
  //       ingredients: [{ amount: 3, measurement: '5 teaspoons', name: 'Brown Suger' }]
  //     });

//     expect(Event.toJSON()).toEqual({
//       _id: expect.any(mongoose.Types.ObjectId),
//       name: 'Cookies',
//       directions: [
//         'preheat oven to 375',
//         'mix ingredients',
//         'put dough on cookie sheet',
//         'bake for 10 minutes'
//       ],
//       ingredients: [{ _id: expect.any(mongoose.Types.ObjectId), amount: 3, measurement: '5 teaspoons', name: 'Brown Suger' }]
//     });
//   });
});
