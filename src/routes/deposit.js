import express from 'express';

import deposit from '../controllers/deposit.js';

import depositWithdrawSchema from '../schemas/depositWithdrawSchema.js';
import bodyReqValidation from '../middleware/bodyReqValidation.js';

const depositRoute = express();

depositRoute.post('/deposit', bodyReqValidation(depositWithdrawSchema), deposit);

export default depositRoute;