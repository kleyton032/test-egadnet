import express from 'express';
import mongoose from 'mongoose';



const app = express();

//config dbmongo
const db = require('./config/database');
const uri = db.dbTest;
mongoose.createConnection(uri);


app.get("/", (req, res) => {
    res.json("OK");
})

app.listen(3000);


