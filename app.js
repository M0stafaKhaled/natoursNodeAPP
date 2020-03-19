const file = require('fs');
const express = require('express');
const app = express();
//  server port namber
const port = 300;

const tours = JSON.parse(file.readFileSync('dev-data/data/tours-simple.json'));
//  base route
app.get('/', (req, res) => {
  res.status(200).json({
    massge: 'hello from server side',
    app: 'natours'
  });
});
// api route  method read data from json file  tours
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'scucess',
    result: tours.length,
    data: { tours }
  });
});
//
app.listen(port, () => {
  console.log('hello from the server');
});
