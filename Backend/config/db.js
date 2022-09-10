import mongoose from 'mongoose';
import citiesModel from  '../models/cities.js';

const connectDB= async()=>{

try{
    const databaseName = 'zomato';

    const con = await 
    mongoose.connect(`mongodb://localhost:27017/${databaseName}`,{
        useNewUrlParser:true,
        useUnifiedTopology:true        
    });

    console.log(`Database connected : ${con.connection.host}`);

}catch(error){
    console.log(`Error : ${error.message}`);
    process.exit(1);

}

}

export default connectDB;