import {MealTypesModel} from '../models/MealTypes.js';

console.log('Meal = ',MealTypesModel)
console.log('Meal find = ',MealTypesModel.find())

export const getMealTypes=(req,res,next)=>{
    MealTypesModel.find().then(result=>{
        console.log('result = ',result)
        res.status(200).json(
            {
                message:"MealTypes retrieved successfully",
                mealTypes:result
            }
        )
    }

    )
}