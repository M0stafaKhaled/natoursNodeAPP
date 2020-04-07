const express = require('express');
const Controller = require('../Controller/userController');

const router = express.Router();

router
  .route('/')
  .get(Controller.getUsers)
  .post(Controller.createUser);

module.exports = router;
