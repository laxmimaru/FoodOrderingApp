import {getCities} from '../controllers/citiesController.js';

import express from 'express';

const router = express.Router();

router.get('/getCities',getCities);

export default router;