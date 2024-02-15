import express from 'express';
import { details } from '../controllers/details.js';
import inactivatedAccount from '../middleware/inactivatedAccount.js';

const detailsRoute = express();

detailsRoute.get('/details', inactivatedAccount, details);

export default detailsRoute;