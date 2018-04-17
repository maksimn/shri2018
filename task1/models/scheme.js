const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  const User = sequelize.define('User', {
    login: { type: Sequelize.STRING, unique: true },
    homeFloor: Sequelize.TINYINT,
    avatarUrl: Sequelize.STRING
  });

  const Room = sequelize.define('Room', {
    title: { type: Sequelize.STRING, unique: true },
    capacity: Sequelize.SMALLINT,
    floor: Sequelize.TINYINT
  });

  const Event = sequelize.define('Event', {
    title: { type: Sequelize.STRING, unique: true },
    dateStart: Sequelize.DATE,
    dateEnd: Sequelize.DATE
  });

  Event.belongsToMany(User, { through: 'Events_Users' });
  User.belongsToMany(Event, { through: 'Events_Users' });
  Event.belongsTo(Room);

  return {
    Room, Event, User
  };
};
