import express from 'express';

import deposit from '../controllers/deposit.js';

import bodyReqValidation from '../middleware/bodyReqValidation.js';
import transactionSchema from '../schemas/transactionSchema.js';
import existBodyAccount from '../middleware/existBodyAccount.js';

const depositRoute = express();

depositRoute.post('/deposit', bodyReqValidation(transactionSchema), existBodyAccount, deposit);

export default depositRoute;