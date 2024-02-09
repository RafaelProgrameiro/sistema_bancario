import express from 'express';
import { details } from '../controllers/details.js';

const detailsRoute = express();

detailsRoute.get('/details', details);

export default detailsRoute;