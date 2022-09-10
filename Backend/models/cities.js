import mongoose from "mongoose";

const citiesSchema = mongoose.Schema(
    {
        city:{
            type:String
        }
     
    }  
)

const citiesModel = mongoose.model('cities',citiesSchema);

export default citiesModel;