import {restaurantModel} from '../models/Restaurant.js';
import asyncHandler from 'express-async-handler';

export const resturantFilter=(req,res)=>{
    let filterCriteria = {}
    console.log('req.body = ',req.body);
    const {location} = req.body;
    console.log('location = ',location);

    if(location){
        filterCriteria['location'] = location;
        restaurantModel.find(filterCriteria)
        .then((result)=>{
            res.status(200).json(
                {
                    message:"restuarants  retrieved successfully",
                    restaurants:result
                }
            )
        }
        )
    }
    

}