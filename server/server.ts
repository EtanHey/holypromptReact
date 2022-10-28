import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
const URI = process.env.MONGODB_URI;
const app = express();
const port = process.env.PORT || 4005;

app.use(express.static(path.join(__dirname, '../client/src/renderer/index.ejs')));
app.use(express.json());

import usersRout from './routes/usersRout';
app.use('/api/users', usersRout);
mongoose
  .connect(URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
