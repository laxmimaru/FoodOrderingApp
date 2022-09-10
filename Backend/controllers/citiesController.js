import citiesModel from '../models/cities.js';
import asyncHandler from 'express-async-handler';

export const getCities= asyncHandler(async(req,res)=>{
    const cities = await citiesModel.find({})
    res.json(cities)

}

);