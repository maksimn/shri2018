const { models } = require('../../models');

const eventFindOptions = {
  include: [
    { model: models.Room },
    { model: models.User }
  ]
};

const setEventDataValues = event => {
  event.dataValues.room = event.Room.dataValues;
  event.dataValues.users = event.Users;

  return event.dataValues;
};

module.exports = {
  event (root, { id }) {
    return models.Event.findById(id, eventFindOptions)
      .then(setEventDataValues);
  },
  events () {
    return models.Event.findAll(eventFindOptions).then(events => {
      return events.map(setEventDataValues);
    });
  },
  user (root, { id }) {
    return models.User.findById(id);
  },
  users () {
    return models.User.findAll();
  },
  room (root, { id }) {
    return models.Room.findById(id);
  },
  rooms () {
    return models.Room.findAll();
  }
};
