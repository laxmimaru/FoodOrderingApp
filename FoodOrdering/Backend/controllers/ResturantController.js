import {restaurantModel} from '../models/Restaurant.js';
import asyncHandler from 'express-async-handler';

export const resturantFilter=(req,res)=>{
    let filterCriteria = {}
    console.log('req.body = ',req.body);
    const {location,cuisine_type} = req.body;
    
    console.log('location = ',location);
    console.log('cuisine_type = ',cuisine_type);

    if(location){
        filterCriteria['location'] = location;
        console.log('filterCriteria = ',filterCriteria);
        
        
    }

    if(cuisine_type && cuisine_type?.length>0){
        filterCriteria['cuisine_type'] = {$in: cuisine_type};
        console.log('filterCriteria = ',filterCriteria);
       
    }else{
        delete filterCriteria['cuisine_type'];
    }

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