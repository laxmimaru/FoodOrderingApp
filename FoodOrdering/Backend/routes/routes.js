import {getCities} from '../controllers/citiesController.js';
import {getMealTypes} from '../controllers/MealTypeController.js'
import {getLocations} from '../controllers/LocationsController.js'
import {resturantFilter}  from '../controllers/ResturantController.js';

import express from 'express';

const router = express.Router();

router.get('/getCities',getCities);
router.get('/getMealTypes',getMealTypes);
router.get('/getLocations',getLocations);
router.post('/resturantFilter',resturantFilter);

export default router;