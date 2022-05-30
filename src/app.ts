import express from 'express';
import cors from 'cors';
import routes from './routes/index';
import mongoose from 'mongoose';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

//config dbmongo
const db = require('./config/database');
const uri = db.dbTest;
mongoose.connect(uri)

app.listen(3000);


