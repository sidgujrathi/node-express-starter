const { intiController } = require('./controller');

class App {
  constructor(express) {
    intiController(express);
  }
}

module.exports = App;