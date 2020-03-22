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
    res.status(200).json({
      status: 'scucess',
      massge: `user ${id}`
    });
  };
};
