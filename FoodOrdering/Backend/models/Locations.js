import mongoose from "mongoose";

const locationsSchema = mongoose.Schema(
    {
        location:{
            type:String
        },
        city_id:{
            type:Number
        },
        city_name:{
            type:String
        }
     
    }  
)

export const locationsModel = mongoose.model('locations',locationsSchema);

