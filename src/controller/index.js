const User = require('./User');

const intiController = (express) => {
  new User().register(express);
};

module.exports = { intiController };
