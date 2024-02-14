import express from 'express';

import deposit from '../controllers/deposit.js';

import depositSchema from '../schemas/depositSchema.js';
import bodyReqValidation from '../middleware/bodyReqValidation.js';

const depositRoute = express();

depositRoute.post('/deposit', bodyReqValidation(depositSchema), deposit);

export default depositRoute;