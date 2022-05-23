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
const options = {
    useCreateIndex: true, 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect(uri)


app.get("/", (req, res) => {
    res.json("OK");
})

app.listen(3000);


