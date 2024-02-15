import express from 'express';

import deposit from '../controllers/deposit.js';

import bodyReqValidation from '../middleware/bodyReqValidation.js';
import transactionSchema from '../schemas/transactionSchema.js';

const depositRoute = express();

depositRoute.post('/deposit', bodyReqValidation(transactionSchema), deposit);

export default depositRoute;