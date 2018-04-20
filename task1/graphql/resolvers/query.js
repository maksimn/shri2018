const { models } = require('../../models');

module.exports = {
  event (root, { id }) {
    return models.Event.findById(id, {
      include: [
        { model: models.Room },
        { model: models.User }
      ]
    }).then(event => {
      event.dataValues.room = event.Room.dataValues;
      event.dataValues.users = event.Users;

      return event.dataValues;
    });
  },
  events (root, args, context) {
    return models.Event.findAll({}, context);
  },
  user (root, { id }) {
    return models.User.findById(id);
  },
  users (root, args, context) {
    return models.User.findAll({}, context);
  },
  room (root, { id }) {
    return models.Room.findById(id);
  },
  rooms (root, args, context) {
    return models.Room.findAll({}, context);
  }
};
