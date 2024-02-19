import express from 'express';

import transactionSchema from '../schemas/transactionSchema.js';
import bodyReqValidation from '../middleware/bodyReqValidation.js';
import existBodyAccount from '../middleware/existBodyAccount.js';

import transfer from '../controllers/transfer.js';

const transferRoute = express();

transferRoute.post('/transfer', bodyReqValidation(transactionSchema), existBodyAccount, transfer);

export default transferRoute;