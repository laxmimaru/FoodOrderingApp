import {getCities} from '../controllers/citiesController.js';
import {getMealTypes} from '../controllers/MealTypeController.js'
import express from 'express';

const router = express.Router();

router.get('/getCities',getCities);
router.get('/getMealTypes',getMealTypes);

export default router;