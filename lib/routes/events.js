const express = require('express');
const eventRouter = express.Router();
const Event = require('../models/Event');

eventRouter.use(express.json());

eventRouter.post('/api/v1/events', (req, res) => {
  Event
    .create(req.body)
    .then(event => res.send(event));
});

eventRouter.get('/api/v1/events', (req, res) => {
  Event
    .find()
    .select({ name: true })
    .then(events => res.send(events));
});

eventRouter.get('/api/v1/events/:id', (req, res) => {
  Event
    .findById(req.params.id)
    .then(event => res.send(event));
});

eventRouter.patch('/api/v1/events/:id', (req, res) => {
  Event
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(event => res.send(event));
});

eventRouter.delete('/api/v1/events/:id', (req, res) => {
  Event
    .findByIdAndDelete(req.params.id)
    .then(event => res.send(event));
});
module.exports = eventRouter;
