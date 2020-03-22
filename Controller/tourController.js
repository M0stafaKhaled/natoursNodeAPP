const file = require('fs');

const tours = JSON.parse(
  file.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.getTours = (req, res) => {
  res.status(200).json({
    status: 'scucess',
    result: tours.length,
    data: { tours }
  });
};
exports.getTour = (req, res) => {
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

exports.createTour = (req, res) => {
  const newid = tours[tours.length - 1].id + 1;
  const newtour = Object.assign({ id: newid }, req.body);
  tours.push(newtour);
  file.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    err => {
      res.status(201).json({ status: 'scucess', data: { newtour } });
    }
  );
};
