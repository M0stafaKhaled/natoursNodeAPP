const express = require('express');

const tourRoute = require('./routes/touerRoute');
const userRoute = require('./routes/userRoute');
const app = express();
//  server port namber
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

//  base route
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);

module.exports = app;
