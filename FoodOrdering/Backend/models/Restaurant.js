import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
    {
        
    id:{
        type:Number
    },
    name:{
        type:String
    },
    city_name:{
        type:String
    },
    location:{
        type:String
    },
    cuisine_type:{
        type:String
    },
    address:{
        type:String
    },
    cuisine_type:{
        type:String
    },
    price:{
        type:Number
    }

    }
)

export const restaurantModel = mongoose.model('restaurants',restaurantSchema);