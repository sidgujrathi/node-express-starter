const { Router } = require('express');
const UserAdapter = require('../adapters/UserAdapter');
class User {
  constructor() {
    this.router = new Router();
    this.init();
    this.userAdapter = new UserAdapter();
  }

  register(express) {
    express.use('/api/users', this.router);
  }

  init() {
    this.router.get('/', (req, res) => res.send(this.userAdapter.getUsers()));
  }
}

module.exports = User;