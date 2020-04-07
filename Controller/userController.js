exports.createUser = (req, res) => {
  res.status(200).json({
    status: 'scucess',
    massge: 'user created'
  });
};
exports.getUsers = (req, res) => {
  res.status(200).json({
    status: 'scucess',
    massge: 'all users'
  });
  exports.getUser = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);
    if (!tour) {
      return res.status(404).json({
        status: 'field',
        massge: 'invalid id'
      });
    }
  };
  exports.delete = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);

    if (!tour) {
      return res.status(404).json({
        status: 'field',
        massge: 'invalid id'
      });
    }
  };
};
