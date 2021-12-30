const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const stockRouter = require('./routes/stockRouter.js');
const userRouter = require('./routes/userRouter.js');

const port = process.env.PORT || 3000;
const uri = "mongodb+srv://ruzeb:mongodb@cluster0.exjb3.mongodb.net/diamond_hands?retryWrites=true&w=majority";


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/stock', stockRouter)
app.use('/login', userRouter)

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('error 404 page'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  //console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));
