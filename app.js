const file = require('fs');
const express = require('express');
const app = express();
//  server port namber
app.use(express.json());
const port = 300;
const tours = JSON.parse(file.readFileSync('dev-data/data/tours-simple.json'));
//  base route
app.get('/', (req, res) => {
  res.status(200).json({
    massge: 'hello from server side',
    app: 'natours'
  });
});
const getTours = (req, res) => {
  res.status(200).json({
    status: 'scucess',
    result: tours.length,
    data: { tours }
  });
};
const getTour = (req, res) => {
  const id = req.params.id * 1;

  const tour = tours.find(el => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: 'field',
      massge: 'invalid id'
    });
  }

  res.status(200).json({
    status: 'scucess',
    data: { tour }
  });
};
const createTour = (req, res) => {
  const newid = tours[tours.length - 1].id + 1;
  const newtour = Object.assign({ id: newid }, req.body);
  tours.push(newtour);
  file.writeFile(
    'dev-data/data/tours-simple.json',
    JSON.stringify(tours),
    err => {
      res.status(201).json({ status: 'scucess', data: { newtour } });
    }
  );
};
// api route  method read data from json file  tours
app.get('/api/v1/tours', getTours);

// read single data from tours
app.get('/api/v1/tours/:id', getTour);

//  make post request to  add  new tour data to json file

app.post('/api/v1/tours', createTour);

app.listen(port, () => {
  console.log('hello from the server');
});
