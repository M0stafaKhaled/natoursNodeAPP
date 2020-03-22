const express = require('express');

const Controller = require('./../Controller/tourController');
const router = express.Router();

// // api route  method read data from json file  tours
// app.get('/api/v1/tours', getTours);
// // read single data from tours
// app.get('/api/v1/tours/:id', getTour);
// //  make post request to  add  new tour data to json file
// app.post('/api/v1/tours', createTour);

router
  .route('/')
  .get(Controller.getTours)
  .post(Controller.createTour);

router.route('/:id').get(Controller.getTour);

module.exports = router;
