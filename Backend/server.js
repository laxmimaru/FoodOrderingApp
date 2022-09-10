import connectDB from './config/db.js';
import router from './routes/routes.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

connectDB();

dotenv.config();

const app = express();

app.use(cors());

/*app.use((req,res,next)=>{
    res.setHeader('Acess-Control-Allow-Origin','*')
    res.setHeader('Acess-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE')
    res.setHeader('Acess-Control-Allow-Headers','Content-Type , Authorization')
    next();
}

)*/

app.use('/api',router);

const PORT = process.env.PORT || 5000;

app.listen(PORT,
    console.log(`App is running in ${process.env.NODE_ENV} mode port ${PORT}`)

)