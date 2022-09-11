import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MealTypeSchema = new Schema(
    {
        meal_type: {
            type: Number
        },
        name: {
            type: String
        }
    }
)

export const MealTypesModel = mongoose.model('mealtypes', MealTypeSchema);