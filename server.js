const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');


dotenv.config({ path: './config/config.env' });

connectDB();

const transactions = require('./routes/transactions');

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}


