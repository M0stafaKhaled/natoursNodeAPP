const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({ path: 'config.env' });
const db = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASEPASSWORD
);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log(con.connection);
    console.log('success');
  });

const port = 300;
app.listen(port, () => {
  console.log('hello from the server');
});
