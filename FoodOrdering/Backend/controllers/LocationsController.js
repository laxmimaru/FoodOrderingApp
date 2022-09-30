import {locationsModel} from '../models/Locations.js';
import asyncHandler from 'express-async-handler';

export const getLocations= (req,res)=>{


    const locations =  locationsModel.find().then((locations)=>{
        res.status(200).json(
            {
                message:"locations retrieved successfully",
                locations:locations
            }
        )
    }

    )
    

}

;